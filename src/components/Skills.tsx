"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label">02 / Skills</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
            Tools of the trade
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{s.icon}</span>
                <h3 className="font-display font-semibold text-white text-sm">{s.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/[0.03] text-slate group-hover:text-slate-2 border border-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
