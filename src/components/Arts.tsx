"use client";
import { motion } from "framer-motion";
import { arts } from "@/data/portfolio";

export default function Arts() {
  return (
    <section id="arts" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label">08 / Beyond Code</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
            Arts, sports & other obsessions
          </h2>
          <p className="text-slate text-sm mt-3 max-w-lg">
            Engineering is half of it. The rest is music, color, and the occasional checkmate.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {arts.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
            >
              <div className="text-2xl mb-3">{a.icon}</div>
              <h3 className="font-display font-semibold text-white text-sm mb-1.5">{a.title}</h3>
              <p className="text-slate text-xs leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
