"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { motion } from "framer-motion";
import { Lightbulb, Focus, Moon, Heart, AlertTriangle } from "lucide-react";
import * as THREE from "three";
import { useAmbientSound } from "./useAmbientSound";

class ModelErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: "" };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-neutral-900 rounded-3xl">
          <div className="flex flex-col items-center gap-3 text-white/60">
            <AlertTriangle size={32} />
            <p className="text-sm">3D model failed to load</p>
            <p className="text-xs text-white/30 max-w-xs text-center">{this.state.error}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

type ModeKey = "off" | "focus" | "nap" | "soothe";

const modeColors: Record<ModeKey, string> = {
  off: "#333333",
  focus: "#e0e8ff",
  nap: "#ffcf8a",
  soothe: "#ff8c5a",
};

const modeLightIntensity: Record<ModeKey, number> = {
  off: 0,
  focus: 200,
  nap: 150,
  soothe: 300,
};

const BASE_PATH = process.env.NODE_ENV === "production" ? "/silentia" : "";

function Model() {
  const { scene } = useGLTF(`${BASE_PATH}/model/model_sep.gltf`);
  const transformRef = useRef<{ s: number; pos: [number, number, number] } | null>(null);

  if (!transformRef.current) {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    const s = maxDim > 0 ? 3 / maxDim : 1;
    transformRef.current = {
      s,
      pos: [-center.x * s, -center.y * s, -center.z * s],
    };
  }

  const { s, pos } = transformRef.current;

  return (
    <group scale={s} position={pos}>
      <primitive object={scene} />
    </group>
  );
}

function SceneSetup({ mode }: { mode: ModeKey }) {
  const isActive = mode !== "off";

  return (
    <>
      <ambientLight intensity={isActive ? 0.2 : 0.05} />
      <directionalLight position={[5, 8, 5]} intensity={isActive ? 0.4 : 0.1} castShadow />
      <directionalLight position={[-3, 4, -2]} intensity={isActive ? 0.1 : 0.05} />
      <pointLight
        position={[0, 0, 1.5]}
        intensity={modeLightIntensity[mode]}
        color={modeColors[mode]}
        distance={0}
        decay={2}
      />
      <Model />
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.4}
        scale={12}
        blur={2.5}
      />
      <Environment preset="apartment" environmentIntensity={isActive ? 0.15 : 0.05} />
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={2}
        maxDistance={12}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

const modes: { key: ModeKey; label: string; sublabel: string; icon: React.ReactNode }[] = [
  { key: "off", label: "关闭", sublabel: "Off", icon: <Lightbulb size={18} /> },
  { key: "focus", label: "深度专注", sublabel: "Deep Focus", icon: <Focus size={18} /> },
  { key: "nap", label: "午后小憩", sublabel: "Afternoon Nap", icon: <Moon size={18} /> },
  { key: "soothe", label: "情绪安抚", sublabel: "Mood Soothe", icon: <Heart size={18} /> },
];

export default function ProductViewer() {
  const [mode, setMode] = useState<ModeKey>("off");
  useAmbientSound(mode);

  return (
    <section id="product" className="section-padding bg-background">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium text-ikea-blue tracking-widest uppercase">
            Interactive 3D Demo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            产品展示
          </h2>
          <p className="text-text-secondary max-w-md mx-auto">
            拖拽旋转查看产品细节，点击模式按钮体验 LED 灯效变化
          </p>
        </motion.div>

        {/* 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={`canvas-container relative ${mode !== "off" ? "pulse-glow" : ""}`}
        >
          <ModelErrorBoundary>
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-white/50">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="text-sm">加载 3D 模型中...</span>
                  </div>
                </div>
              }
            >
              <Canvas
                camera={{ position: [4, 3, 4], fov: 45 }}
                shadows
                gl={{ antialias: true, powerPreference: "high-performance" }}
                onCreated={({ gl }) => {
                  gl.toneMapping = THREE.ACESFilmicToneMapping;
                  gl.toneMappingExposure = 1.2;
                }}
              >
                <SceneSetup mode={mode} />
              </Canvas>
            </Suspense>
          </ModelErrorBoundary>

          {/* Mode indicator overlay */}
          {mode !== "off" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm"
            >
              <span className="text-xs text-white/80">
                {modes.find((m) => m.key === mode)?.label} 模式已激活
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Mode buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {modes.map((m) => (
            <button
              key={m.key}
              onClick={() => setMode(m.key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                mode === m.key
                  ? "bg-ikea-blue text-white shadow-lg shadow-ikea-blue/20"
                  : "bg-card-bg text-foreground/70 hover:bg-warm-gray shadow-sm"
              }`}
            >
              {m.icon}
              <span>{m.label}</span>
              <span className="text-xs opacity-60">{m.sublabel}</span>
            </button>
          ))}
        </motion.div>

        {/* Feature callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { label: "波束成形扬声器", detail: "120° 声音聚焦" },
            { label: "环境传感器", detail: "温湿度 / 光线 / 声音" },
            { label: "LED 点阵", detail: "隐形呼吸光效" },
            { label: "精油扩散器", detail: "可降解胶囊系统" },
          ].map((feat) => (
            <div
              key={feat.label}
              className="bg-card-bg rounded-2xl p-4 text-center shadow-sm"
            >
              <p className="text-sm font-semibold text-foreground">{feat.label}</p>
              <p className="text-xs text-text-secondary mt-1">{feat.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
