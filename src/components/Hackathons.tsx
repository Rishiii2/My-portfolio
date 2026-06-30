"use client";
import { motion } from "framer-motion";
import { hackathons } from "@/data/portfolio";
import { Trophy } from "lucide-react";

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label">05 / Hackathons</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
            Competitions & sprints
          </h2>
          <p className="text-slate text-sm mt-3 max-w-lg">
            8 hackathons in recent months — from national-level ISRO challenges to 24-hour AI sprints.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {hackathons.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber/30 transition-colors group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <Trophy size={14} className="text-amber/70 shrink-0" />
                  <h3 className="font-display font-semibold text-sm text-white">{h.name}</h3>
                </div>
                {h.badge && (
                  <span className="text-[10px] font-mono text-amber bg-amber/10 border border-amber/20 px-2 py-0.5 rounded-full shrink-0">
                    {h.badge}
                  </span>
                )}
              </div>
              <div className="text-cyan text-xs mb-2 pl-[22px]">{h.subtitle}</div>
              <p className="text-slate text-xs leading-relaxed pl-[22px]">{h.desc}</p>
              <div className="text-[10px] font-mono text-slate-2 mt-3 pl-[22px]">{h.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
