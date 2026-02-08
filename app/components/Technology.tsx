"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Cpu,
  SlidersHorizontal,
  Bluetooth,
  Activity,
  Smartphone,
  BrainCircuit,
  Radar,
  CircuitBoard,
} from "lucide-react";

/* ── 初步设计：目前产品用到的技术 ── */
const currentTech = [
  {
    icon: <HeartPulse size={24} />,
    title: "小米可穿戴压力数据接入",
    description:
      "通过蓝牙与小米 IoT 协议实时对接小米手环/手表的压力监测数据，包括心率变异性（HRV）、睡眠质量、活动量等多维生理指标。盒子本身不内置生理传感器，而是作为小米智能家居生态的一环，利用用户已有的小米可穿戴设备获取压力画像，降低使用门槛。",
    color: "from-sky-500/10 to-blue-500/10",
    borderColor: "border-sky-200",
    iconColor: "text-sky-600",
  },
  {
    icon: <Cpu size={24} />,
    title: "AI 压力等级推断",
    description:
      "内置轻量级神经网络模型，基于小米手环/手表同步的 HRV、睡眠质量、活动量等数据，以低于500毫秒的延迟推断用户当前压力等级（低/中/高）。模型基于公开压力数据集预训练，并在使用过程中持续个性化微调，准确率可达85%以上。",
    color: "from-indigo-500/10 to-violet-500/10",
    borderColor: "border-indigo-200",
    iconColor: "text-indigo-600",
  },
  {
    icon: <SlidersHorizontal size={24} />,
    title: "模式自动调节",
    description:
      "根据压力推断结果自动切换灯光与声音模式：低压力时维持「专注」模式（冷白光 + 环境音），中度压力触发「小憩」模式（暖黄光 + 舒缓旋律），高压力激活「安抚」模式（柔和呼吸灯 + 深度放松音景）。切换过程平滑渐变，避免突兀打断用户。",
    color: "from-cyan-500/10 to-teal-500/10",
    borderColor: "border-cyan-200",
    iconColor: "text-cyan-600",
  },
];

/* ── 初步设计：技术可行的对标案例 ── */
const benchmarks = [
  {
    icon: <Bluetooth size={24} />,
    title: "小米手环 8 Pro · 压力监测",
    field: "可穿戴领域",
    description:
      "小米手环 8 Pro 通过 PPG 传感器全天候采集 HRV 数据，配合自研算法将压力划分为放松/正常/中等/偏高四级。作为本产品的核心数据源，通过蓝牙实时同步压力等级至盒子，已被小米全球数千万用户验证可靠性。",
    reduction: "四级压力分级",
  },
  {
    icon: <Activity size={24} />,
    title: "小米 IoT · 智能家居联动",
    field: "IoT 生态领域",
    description:
      "小米 IoT 平台已连接5亿+设备，支持可穿戴设备与智能家居的跨设备数据流转。本产品借助该生态，无缝接收手环/手表的压力、睡眠、运动数据，无需用户额外配置。已有成熟的设备间联动框架，证明了「可穿戴 → 家居设备」数据驱动方案的工程可行性。",
    reduction: "5亿+ 设备连接",
  },
  {
    icon: <Smartphone size={24} />,
    title: "小米 Watch S3 · 健康管理",
    field: "智能手表领域",
    description:
      "小米 Watch S3 搭载高精度 PPG 传感器与血氧监测模块，支持全天候压力监测、睡眠分期分析与呼吸训练引导。通过米家 App 打通健康数据链路，为本产品提供了更丰富的压力评估维度，验证了小米生态内「可穿戴健康数据 → 智能家居响应」的完整闭环。",
    reduction: "压力 + 血氧 + 睡眠",
  },
];

/* ── 持续改进：今后的改进方向 ── */
const improvements = [
  {
    icon: <BrainCircuit size={24} />,
    title: "情绪 AI 深度识别",
    description:
      "当前压力推断主要依赖小米可穿戴设备的 HRV 与活动数据。未来将引入语音情绪分析与面部微表情识别模型，结合深度学习实现焦虑、疲惫、烦躁等细粒度情绪状态识别，使模式切换更加精准贴合用户真实心理需求。",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: <Radar size={24} />,
    title: "毫米波非接触感知",
    description:
      "为消除用户需要触碰传感器的限制，计划集成60GHz毫米波雷达模块，通过非接触方式检测用户呼吸频率、心率等生命体征。无需穿戴设备即可持续监测压力状态，实现真正的「无感」智能调节体验。",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: <CircuitBoard size={24} />,
    title: "边缘 AI 芯片与隐私保护",
    description:
      "所有生理数据与压力推断均在设备端完成，不上传云端，确保用户健康隐私。计划迁移至专用 NPU 芯片平台，将推理功耗降低60%以上，同时支持联邦学习实现跨设备模型优化而不暴露个人数据。",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Technology() {
  return (
    <section id="technology" className="section-padding bg-background">
      <div className="mx-auto max-w-6xl">
        {/* ───── Section header ───── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-medium text-ikea-blue tracking-widest uppercase">
            Technical Feasibility
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            技术可行性
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            基于多模态生理传感，通过「压力采集 → AI 推断 → 自动调节」闭环实现智能感官调节
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            1 · 初步设计 — 目前产品用到的技术
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2">初步设计</h3>
          <p className="text-text-secondary text-sm tracking-wide">
            Initial Design — Current Technologies
          </p>
        </motion.div>

        {/* 当前技术卡片 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {currentTech.map((t) => (
            <motion.div
              key={t.title}
              variants={cardVariants}
              className={`card-hover bg-card-bg rounded-3xl p-6 border ${t.borderColor} relative overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-50`}
              />
              <div className="relative z-10">
                <div className={`${t.iconColor} mb-4`}>{t.icon}</div>
                <h4 className="text-lg font-bold mb-2">{t.title}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {t.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── 对标案例 ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h4 className="text-xl md:text-2xl font-bold mb-1">
            对标案例
          </h4>
          <p className="text-text-secondary text-sm tracking-wide">
            Benchmark Cases
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20"
        >
          {benchmarks.map((b) => (
            <motion.div
              key={b.title}
              variants={cardVariants}
              className="card-hover bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl p-6 border border-gray-200 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-ikea-blue/10 text-ikea-blue flex items-center justify-center">
                  {b.icon}
                </div>
                <div>
                  <h5 className="text-base font-bold leading-tight">
                    {b.title}
                  </h5>
                  <span className="text-xs text-text-secondary">{b.field}</span>
                </div>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed flex-1">
                {b.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                <span className="text-xs text-text-secondary">核心能力</span>
                <span className="text-sm font-bold text-ikea-blue">
                  {b.reduction}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ═══════════════════════════════════════════
            2 · 持续改进 — 今后的改进方向
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2">持续改进</h3>
          <p className="text-text-secondary text-sm tracking-wide">
            Going-forward Improvement Directions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {improvements.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="card-hover bg-card-bg rounded-3xl p-6 border border-gray-100"
            >
              <div
                className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}
              >
                {item.icon}
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
