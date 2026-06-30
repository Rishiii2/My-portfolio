"use client";
import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[200px_1fr] gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">06 / Education</span>
        </motion.div>

        <div className="space-y-6 max-w-2xl">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                <GraduationCap size={18} className="text-cyan" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display font-semibold text-white text-base">{edu.degree}</h3>
                  <span className="font-mono text-xs text-slate-2">{edu.period}</span>
                </div>
                <div className="text-cyan text-sm mt-0.5">{edu.inst}</div>
                <div className="flex items-center gap-3 mt-2">
                  {edu.gpa && <span className="text-xs font-mono text-amber">{edu.gpa}</span>}
                  {edu.note && <span className="text-xs text-slate">{edu.note}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
