"use client";

import { motion } from "framer-motion";
import { Briefcase, Palette, GraduationCap, MapPin, Target, Zap } from "lucide-react";

const personas = [
  {
    name: "陈默",
    age: 29,
    role: "互联网产品经理",
    icon: <Briefcase size={24} />,
    color: "bg-blue-500",
    gradient: "from-blue-50 to-indigo-50",
    location: "独居，临近高架桥公寓",
    painPoints: [
      "对噪音敏感，焦虑失眠",
      "需快速切换工作/休息模式",
      "环境干扰大，自我调节到达瓶颈",
    ],
    scenario:
      "晚上10点，启动「深度专注」模式过滤车流声，冷杉香气帮助集中精神。完成工作后切换「冥想解压」模式，跟随灯光节奏深呼吸后入睡。",
    channels: ["小米商城", "社交媒体精准推送", "职场KOL测评"],
  },
  {
    name: "林薇",
    age: 35,
    role: "设计师 / 新生儿母亲",
    icon: <Palette size={24} />,
    color: "bg-pink-500",
    gradient: "from-pink-50 to-rose-50",
    location: "产后居家办公",
    painPoints: [
      "需同时照顾婴儿和事业",
      "情绪易波动",
      "寻找短暂的'个人喘息空间'",
    ],
    scenario:
      "午后婴儿入睡，打开「森林秘境」模式。定向声场不吵醒宝宝，森林光影与泥土芬芳让她15分钟内获得极大精神恢复。",
    channels: ["宜家线下体验区", "母婴社区", "家庭教育公众号"],
  },
  {
    name: "王越",
    age: 22,
    role: "备考研究生",
    icon: <GraduationCap size={24} />,
    color: "bg-violet-500",
    gradient: "from-violet-50 to-purple-50",
    location: "大学宿舍",
    painPoints: [
      "宿舍嘈杂难以专注",
      "居住空间有限",
      "注重性价比和产品颜值",
    ],
    scenario:
      "在宿舍书桌上，启动「自习室」声场隔绝室友游戏声，配合迷迭香提高注意力。学习间歇参与「全球静心挑战」。",
    channels: ["校园团购", "学生优惠", "小红书/抖音博主"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Personas() {
  return (
    <section id="personas" className="section-padding bg-background">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-ikea-blue tracking-widest uppercase">
            Target Users
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            用户画像
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            三类核心目标用户，覆盖都市白领、年轻家庭与学生群体
          </p>
        </motion.div>

        {/* Persona cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {personas.map((p) => (
            <motion.div
              key={p.name}
              variants={cardVariants}
              className={`card-hover bg-gradient-to-br ${p.gradient} rounded-3xl overflow-hidden border border-white`}
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${p.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    <p className="text-sm text-text-secondary">
                      {p.age}岁 · {p.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-text-secondary mb-4">
                  <MapPin size={12} />
                  <span>{p.location}</span>
                </div>
              </div>

              {/* Pain points */}
              <div className="px-6 pb-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <Target size={14} className="text-red-400" />
                  <span className="text-xs font-semibold text-foreground/80">痛点</span>
                </div>
                <ul className="space-y-1.5">
                  {p.painPoints.map((point) => (
                    <li key={point} className="text-sm text-foreground/60 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-foreground/30 mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usage scenario */}
              <div className="px-6 pb-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <Zap size={14} className="text-amber-500" />
                  <span className="text-xs font-semibold text-foreground/80">使用场景</span>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {p.scenario}
                </p>
              </div>

              {/* Channels */}
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.channels.map((ch) => (
                    <span
                      key={ch}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/70 text-foreground/60 border border-foreground/5"
                    >
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
