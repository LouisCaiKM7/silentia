"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const handleScrollDown = () => {
    const el = document.querySelector("#product");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ikea-blue/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-xiaomi-orange/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ikea-yellow/8 blur-3xl"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4"
        >
          <div className="w-16 h-16 rounded-2xl bg-ikea-blue flex items-center justify-center shadow-lg shadow-ikea-blue/20">
            <span className="text-white font-bold text-xl tracking-wider">IKEA</span>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-foreground/30 text-3xl font-extralight"
          >
            ×
          </motion.span>
          <div className="w-16 h-16 rounded-2xl bg-xiaomi-orange flex items-center justify-center shadow-lg shadow-xiaomi-orange/20">
            <span className="text-white font-bold text-lg">MI</span>
          </div>
        </motion.div>

        {/* Product name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">静隙盒子</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-light tracking-wide">
            Quiet Gap Box
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base md:text-lg text-foreground/60 max-w-lg leading-relaxed"
        >
          在喧嚣中，创造属于你的静谧间隙
        </motion.p>

        {/* CTA line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex items-center gap-4 mt-4"
        >
          <div className="h-px w-12 bg-foreground/20" />
          <span className="text-xs text-text-secondary tracking-widest uppercase">
            智能感官调节设备
          </span>
          <div className="h-px w-12 bg-foreground/20" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-xs text-text-secondary tracking-wider">探索更多</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-text-secondary" />
        </motion.div>
      </motion.button>
    </section>
  );
}
