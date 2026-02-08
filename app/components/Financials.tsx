"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, DollarSign, Users, School } from "lucide-react";

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const keyMetrics = [
  {
    icon: <DollarSign size={24} />,
    label: "产品单价",
    value: 1299,
    prefix: "¥",
    suffix: "",
    color: "text-ikea-blue",
    bg: "bg-blue-50",
  },
  {
    icon: <TrendingUp size={24} />,
    label: "三年累计净利润",
    value: 12000,
    prefix: "¥",
    suffix: "万",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: <Users size={24} />,
    label: "三年服务用户",
    value: 40,
    prefix: "",
    suffix: "万+",
    color: "text-xiaomi-orange",
    bg: "bg-orange-50",
  },
  {
    icon: <School size={24} />,
    label: "改善学校数量",
    value: 50,
    prefix: "",
    suffix: "所",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

const revenueData = [
  {
    year: "Y1",
    hardware: "1.039亿",
    subscription: "239万",
    units: "8万台",
    hardwareBar: 40,
    subBar: 17,
  },
  {
    year: "Y2",
    hardware: "1.949亿",
    subscription: "746万",
    units: "15万台",
    hardwareBar: 75,
    subBar: 53,
  },
  {
    year: "Y3",
    hardware: "2.598亿",
    subscription: "1393万",
    units: "20万台",
    hardwareBar: 100,
    subBar: 100,
  },
];

export default function Financials() {
  return (
    <section id="financials" className="section-padding bg-section-alt">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-green-600 tracking-widest uppercase">
            Financial Overview
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            财务概览
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            清晰的盈利路径，商业成功与社会价值创造紧密绑定
          </p>
        </motion.div>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {keyMetrics.map((m) => (
            <div
              key={m.label}
              className="card-hover bg-card-bg rounded-3xl p-6 text-center shadow-sm"
            >
              <div
                className={`w-12 h-12 rounded-2xl ${m.bg} ${m.color} flex items-center justify-center mx-auto mb-4`}
              >
                {m.icon}
              </div>
              <p className={`text-2xl md:text-3xl font-bold ${m.color}`}>
                <AnimatedCounter
                  target={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                />
              </p>
              <p className="text-xs text-text-secondary mt-2">{m.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Revenue projection table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card-bg rounded-3xl p-6 md:p-8 shadow-sm mb-12"
        >
          <h3 className="text-lg font-bold mb-6">三年收入预测</h3>
          <div className="space-y-6">
            {revenueData.map((row, idx) => (
              <motion.div
                key={row.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-ikea-blue bg-blue-50 px-3 py-1 rounded-full">
                      {row.year}
                    </span>
                    <span className="text-sm text-text-secondary">
                      销量 {row.units}
                    </span>
                  </div>
                  <span className="text-sm font-semibold">{row.hardware}</span>
                </div>

                {/* Hardware bar */}
                <div className="h-3 bg-warm-gray rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${row.hardwareBar}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + idx * 0.15, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-ikea-blue to-blue-400 rounded-full"
                  />
                </div>

                {/* Subscription bar */}
                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 bg-warm-gray rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.subBar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.15, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-xiaomi-orange to-amber-400 rounded-full"
                    />
                  </div>
                  <span className="text-xs text-text-secondary whitespace-nowrap">
                    订阅 {row.subscription}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-6 pt-4 border-t border-warm-gray">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-ikea-blue" />
              <span className="text-xs text-text-secondary">硬件销售</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-xiaomi-orange" />
              <span className="text-xs text-text-secondary">服务订阅</span>
            </div>
          </div>
        </motion.div>

        {/* Key financial highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            {
              label: "硬件毛利率",
              value: "50% → 58%",
              detail: "规模效应逐年提升",
            },
            {
              label: "订阅服务毛利率",
              value: "70-80%",
              detail: "高附加值持续收入",
            },
            {
              label: "盈亏平衡点",
              value: "Y1 Q4",
              detail: "累计销量约12万台时实现",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-card-bg rounded-2xl p-5 text-center shadow-sm"
            >
              <p className="text-xs text-text-secondary mb-1">{item.label}</p>
              <p className="text-xl font-bold gradient-text">{item.value}</p>
              <p className="text-xs text-text-secondary mt-1">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
