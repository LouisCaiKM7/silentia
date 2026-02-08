"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Cpu,
  Speaker,
  Car,
  TrainFront,
  Home,
  BrainCircuit,
  Radar,
  CircuitBoard,
} from "lucide-react";

/* ── 初步设计：目前产品用到的技术 ── */
const currentTech = [
  {
    icon: <Mic size={24} />,
    title: "麦克风阵列采集",
    description:
      "盒子内置多方位麦克风阵列，实时360°采集周围环境噪声信号。阵列覆盖桌面级空间，精准捕捉中低频干扰声源方向与强度，为后续降噪运算提供高保真输入数据。",
    color: "from-sky-500/10 to-blue-500/10",
    borderColor: "border-sky-200",
    iconColor: "text-sky-600",
  },
  {
    icon: <Cpu size={24} />,
    title: "DSP 实时信号处理",
    description:
      "内置高性能数字信号处理器，以低于10毫秒的延迟分析噪声频谱并生成反相声波。算法针对多声源场景优化，可同时处理空调嗡鸣、交通噪音等复合低频干扰，确保降噪实时性与准确性。",
    color: "from-indigo-500/10 to-violet-500/10",
    borderColor: "border-indigo-200",
    iconColor: "text-indigo-600",
  },
  {
    icon: <Speaker size={24} />,
    title: "定向扬声器输出",
    description:
      "通过定向扬声器阵列播放反相声波，利用相消干涉原理在用户周围形成约1米直径的「静音区」。声场经过精确校准，覆盖使用者头部区域的同时不影响周围他人，适合开放办公与共享空间。",
    color: "from-cyan-500/10 to-teal-500/10",
    borderColor: "border-cyan-200",
    iconColor: "text-cyan-600",
  },
];

/* ── 初步设计：技术可行的对标案例 ── */
const benchmarks = [
  {
    icon: <Car size={24} />,
    title: "凯迪拉克 XTS · BOSE ANC",
    field: "汽车领域",
    description:
      "2013年上市即全系搭载BOSE主动降噪，车载麦克风采集发动机与路噪后由低音扬声器输出反相波。实测可降低车内噪音5-8分贝，将高速行驶的轰鸣感从「吵闹」降至「安静」，已商业化验证十余年。",
    reduction: "5-8 dB",
  },
  {
    icon: <TrainFront size={24} />,
    title: "中科院 · 降噪头靠",
    field: "高铁领域",
    description:
      "中科院声学研究所研发的座椅降噪系统，通过头枕周围扬声器输出反相声波，形成约1米直径的降噪区域。针对100-500Hz轮轨低频噪声可实现10分贝衰减，证明了「局部空间降噪」的工程可行性。",
    reduction: "10 dB",
  },
  {
    icon: <Home size={24} />,
    title: "BOSE · 家用音响降噪",
    field: "家居领域",
    description:
      "BOSE高端家用音响通过房间内5-8个麦克风组成阵列，采集装修声、空调声等环境噪音后播放反相声波。可覆盖10-20平方米空间，实现30-40分贝降噪深度，将嘈杂客厅变为「图书馆级安静」。",
    reduction: "30-40 dB",
  },
];

/* ── 持续改进：今后的改进方向 ── */
const improvements = [
  {
    icon: <BrainCircuit size={24} />,
    title: "AI 高频降噪算法",
    description:
      "当前主动降噪对2000Hz以上高频声效果有限。未来将引入深度学习模型，实时预测并抵消人声、突发噪声等高频干扰，突破传统DSP算法在短波长声波处理上的瓶颈，显著扩展降噪频段覆盖范围。",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: <Radar size={24} />,
    title: "环境自适应声场",
    description:
      "降噪效果受房间大小、家具摆放等声学环境影响较大。后续将集成加速度计与扩展麦克风阵列，实时感知空间变化并动态调整反相声波参数，确保在不同户型与场景下均能维持稳定的降噪表现。",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: <CircuitBoard size={24} />,
    title: "低功耗芯片与成本优化",
    description:
      "现阶段DSP与麦克风阵列成本约占硬件总成本30%。计划迁移至ARM Cortex-M系列低功耗芯片平台，结合规模化量产将降噪模块成本降低40%以上，同时实现更低功耗以支持长时间持续运行。",
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
            基于主动降噪（ANC）相消干涉原理，通过「噪声采集 → 信号处理 → 反相输出」闭环实现空间级静音
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
                <span className="text-xs text-text-secondary">降噪深度</span>
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
