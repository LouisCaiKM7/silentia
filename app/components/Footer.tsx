"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-ikea-blue flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-wider">IKEA</span>
              </div>
              <span className="text-white/30 text-lg font-light">×</span>
              <div className="w-10 h-10 rounded-lg bg-xiaomi-orange flex items-center justify-center">
                <span className="text-white font-bold text-xs">MI</span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              静隙盒子 — 在喧嚣中，创造属于你的静谧间隙。
              <br />
              IKEA × Xiaomi 联名智能感官调节设备。
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
              快速导航
            </h4>
            <ul className="space-y-2">
              {[
                { label: "产品展示", href: "#product" },
                { label: "使用场景", href: "#scenarios" },
                { label: "用户画像", href: "#personas" },
                { label: "财务概览", href: "#financials" },
                { label: "公益计划", href: "#impact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
              项目信息
            </h4>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs text-white/60">
                BPC Challenge 2025
              </div>
              <p className="text-sm text-white/40">
                本网站为演示用途，展示「静隙盒子」产品概念与商业计划。
              </p>
              <p className="text-sm text-white/40">
                技术栈: Next.js · Three.js · Tailwind CSS · Framer Motion
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2025 IKEA × Xiaomi 静隙盒子. Demo Project.
          </p>
          <p className="text-xs text-white/30">
            商业向善 · Business for Good
          </p>
        </div>
      </div>
    </footer>
  );
}
