"use client";

import { motion } from "framer-motion";
import { Brain, Sun, HeartPulse, TreePine, Baby, BookOpen } from "lucide-react";

const scenarios = [
  {
    icon: <Brain size={28} />,
    title: "深度专注",
    subtitle: "Deep Focus",
    description:
      "屏蔽中高频噪音，释放雪松香气，灯光保持恒定柔白。帮助你在嘈杂环境中快速进入心流状态。",
    color: "from-blue-500/10 to-indigo-500/10",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    tags: ["降噪", "雪松香", "冷白光"],
  },
  {
    icon: <Sun size={28} />,
    title: "午后小憩",
    subtitle: "Afternoon Nap",
    description:
      "播放模拟图书馆背景音，配合类似阳光穿过百叶窗的缓慢移动光影，打造完美小憩氛围。",
    color: "from-amber-500/10 to-yellow-500/10",
    borderColor: "border-amber-200",
    iconColor: "text-amber-600",
    tags: ["图书馆白噪音", "暖光", "助眠"],
  },
  {
    icon: <HeartPulse size={28} />,
    title: "情绪安抚",
    subtitle: "Mood Soothe",
    description:
      "与小米手环联动，检测到压力升高时，自动启动模拟篝火声和温暖的橘色光影，缓解焦虑。",
    color: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-200",
    iconColor: "text-orange-600",
    tags: ["篝火声", "橘色光影", "手环联动"],
  },
  {
    icon: <TreePine size={28} />,
    title: "森林秘境",
    subtitle: "Forest Escape",
    description:
      "模拟森林光影与泥土芬芳，定向声场确保不打扰他人，15 分钟内获得极大精神恢复。",
    color: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    tags: ["森林声", "泥土香", "定向声场"],
  },
  {
    icon: <Baby size={28} />,
    title: "安稳哄睡",
    subtitle: "Baby Comfort",
    description:
      "模拟子宫内温暖节律，配合轻柔白噪音与暖光，辅助安抚婴儿入睡，解放父母双手。",
    color: "from-pink-500/10 to-rose-500/10",
    borderColor: "border-pink-200",
    iconColor: "text-pink-600",
    tags: ["子宫节律", "白噪音", "暖光"],
  },
  {
    icon: <BookOpen size={28} />,
    title: "自习室",
    subtitle: "Study Mode",
    description:
      "隔绝周围嘈杂声，配合提高注意力的迷迭香气味，打造属于你的私人自习空间。",
    color: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-violet-200",
    iconColor: "text-violet-600",
    tags: ["隔音", "迷迭香", "专注力"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Scenarios() {
  return (
    <section id="scenarios" className="section-padding bg-section-alt">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-xiaomi-orange tracking-widest uppercase">
            Smart Scenarios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            使用场景
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            六大预设模式，覆盖工作、休息、育儿、学习等多种生活场景，
            一键切换你的感官世界
          </p>
        </motion.div>

        {/* Scenario cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {scenarios.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              className={`card-hover bg-card-bg rounded-3xl p-6 border ${s.borderColor} relative overflow-hidden`}
            >
              {/* Gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-50`}
              />

              <div className="relative z-10">
                <div className={`${s.iconColor} mb-4`}>{s.icon}</div>
                <h3 className="text-lg font-bold mb-1">{s.title}</h3>
                <p className="text-xs text-text-secondary mb-3 tracking-wide">
                  {s.subtitle}
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-foreground/5 text-foreground/60"
                    >
                      {tag}
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
