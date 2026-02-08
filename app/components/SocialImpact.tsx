"use client";

import { motion } from "framer-motion";
import { Heart, School, Clock, Globe } from "lucide-react";

const milestones = [
  {
    icon: <Clock size={20} />,
    value: "6000万+",
    unit: "小时",
    label: "累计静心时间",
  },
  {
    icon: <School size={20} />,
    value: "50",
    unit: "所",
    label: "改善学校声学环境",
  },
  {
    icon: <Heart size={20} />,
    value: "1.5万+",
    unit: "名",
    label: "惠及偏远学生",
  },
  {
    icon: <Globe size={20} />,
    value: "2%",
    unit: "",
    label: "硬件收入固定投入",
  },
];

export default function SocialImpact() {
  return (
    // <section id="impact" className="section-padding relative overflow-hidden">
    //   {/* Warm gradient background */}
    //   <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/50 to-rose-50/30 pointer-events-none" />

    //   <div className="relative z-10 mx-auto max-w-6xl">
    //     {/* Section header */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 30 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true, margin: "-100px" }}
    //       transition={{ duration: 0.6 }}
    //       className="text-center mb-16"
    //     >
    //       <span className="text-xs font-medium text-rose-500 tracking-widest uppercase">
    //         Social Impact
    //       </span>
    //       <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
    //         公益计划
    //       </h2>
    //       <p className="text-text-secondary max-w-lg mx-auto">
    //         商业向善 — 将商业成功与社会价值创造紧密绑定
    //       </p>
    //     </motion.div>

    //     {/* Main content grid */}
    //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
    //       {/* Left: Description */}
    //       <motion.div
    //         initial={{ opacity: 0, x: -30 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 0.6 }}
    //       >
    //         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-6">
    //           <Heart size={16} />
    //           静音教室计划
    //         </div>

    //         <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
    //           用静谧的力量，
    //           <br />
    //           改变偏远地区的学习环境
    //         </h3>

    //         <p className="text-foreground/60 leading-relaxed mb-6">
    //           每一位用户的使用时长都将换算为「静心积分」，结合企业配捐，
    //           用于改善偏远地区学校的声学环境。我们相信，安静的学习空间是每个孩子应有的权利。
    //         </p>

    //         {/* Progress visualization */}
    //         <div className="space-y-4">
    //           <div>
    //             <div className="flex justify-between text-sm mb-2">
    //               <span className="text-foreground/70 font-medium">静音教室建设进度</span>
    //               <span className="text-rose-500 font-semibold">32 / 50 所</span>
    //             </div>
    //             <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
    //               <motion.div
    //                 initial={{ width: 0 }}
    //                 whileInView={{ width: "64%" }}
    //                 viewport={{ once: true }}
    //                 transition={{ duration: 1.5, ease: "easeOut" }}
    //                 className="h-full bg-gradient-to-r from-rose-400 to-orange-400 rounded-full"
    //               />
    //             </div>
    //           </div>

    //           <div>
    //             <div className="flex justify-between text-sm mb-2">
    //               <span className="text-foreground/70 font-medium">年度公益预算使用</span>
    //               <span className="text-amber-600 font-semibold">78%</span>
    //             </div>
    //             <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
    //               <motion.div
    //                 initial={{ width: 0 }}
    //                 whileInView={{ width: "78%" }}
    //                 viewport={{ once: true }}
    //                 transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
    //                 className="h-full bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </motion.div>

    //       {/* Right: Illustration placeholder */}
    //       <motion.div
    //         initial={{ opacity: 0, x: 30 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 0.6, delay: 0.2 }}
    //         className="relative"
    //       >
    //         <div className="aspect-square rounded-3xl bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center overflow-hidden">
    //           {/* Decorative elements */}
    //           <div className="absolute inset-0">
    //             <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-rose-200/50 blur-xl" />
    //             <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-amber-200/50 blur-xl" />
    //             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-orange-200/30 blur-2xl" />
    //           </div>

    //           <div className="relative z-10 text-center p-8">
    //             <div className="w-20 h-20 rounded-3xl bg-white/80 flex items-center justify-center mx-auto mb-4 shadow-lg">
    //               <School size={36} className="text-rose-500" />
    //             </div>
    //             <p className="text-lg font-bold text-foreground/80 mb-2">静音教室</p>
    //             <p className="text-sm text-foreground/50">
    //               安静的学习空间
    //               <br />
    //               是每个孩子的权利
    //             </p>
    //           </div>
    //         </div>
    //       </motion.div>
    //     </div>

    //     {/* Impact numbers */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.6 }}
    //       className="grid grid-cols-2 md:grid-cols-4 gap-4"
    //     >
    //       {milestones.map((m, idx) => (
    //         <motion.div
    //           key={m.label}
    //           initial={{ opacity: 0, y: 20 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           viewport={{ once: true }}
    //           transition={{ duration: 0.4, delay: idx * 0.1 }}
    //           className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 text-center shadow-sm"
    //         >
    //           <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-3">
    //             {m.icon}
    //           </div>
    //           <p className="text-xl md:text-2xl font-bold text-foreground">
    //             {m.value}
    //             <span className="text-sm font-normal text-text-secondary ml-0.5">
    //               {m.unit}
    //             </span>
    //           </p>
    //           <p className="text-xs text-text-secondary mt-1">{m.label}</p>
    //         </motion.div>
    //       ))}
    //     </motion.div>

    //     {/* Mindfulness points concept */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.6, delay: 0.3 }}
    //       className="mt-12 bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center shadow-sm"
    //     >
    //       <h4 className="text-lg font-bold mb-2">静心积分体系</h4>
    //       <p className="text-sm text-text-secondary max-w-2xl mx-auto mb-6">
    //         每使用 1 小时 = 1 静心积分。积分可兑换精油胶囊、织物面板等衍生品，
    //         同时触发等额企业配捐，形成「使用即公益」的良性循环。
    //       </p>
    //       <div className="flex items-center justify-center gap-4 flex-wrap">
    //         {["使用产品", "积累积分", "兑换好物", "触发配捐", "建设教室"].map(
    //           (step, i) => (
    //             <div key={step} className="flex items-center gap-2">
    //               <span className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-400 to-orange-400 text-white text-xs font-bold flex items-center justify-center">
    //                 {i + 1}
    //               </span>
    //               <span className="text-sm text-foreground/70">{step}</span>
    //               {i < 4 && (
    //                 <span className="text-foreground/20 hidden sm:inline">→</span>
    //               )}
    //             </div>
    //           )
    //         )}
    //       </div>
    //     </motion.div>
    //   </div>
    // </section>
    <></>
  );
}
