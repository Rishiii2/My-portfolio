"use client";
import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="section-label">03 / Experience</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
            Where I've worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan/40 via-white/10 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-10"
              >
                <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${exp.highlight ? "bg-cyan border-cyan glow-cyan-sm" : "bg-space border-white/20"}`} />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display font-semibold text-lg text-white">{exp.title}</h3>
                  <span className="font-mono text-xs text-slate-2">{exp.period}</span>
                </div>
                <div className="text-cyan text-sm font-medium mb-3">{exp.org}</div>

                <ul className="space-y-1.5 mb-3">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="text-slate text-sm leading-relaxed flex gap-2">
                      <span className="text-cyan/60 mt-1">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
