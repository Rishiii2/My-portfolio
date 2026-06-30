"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import { Award, ChevronDown } from "lucide-react";

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certifications : certifications.slice(0, 9);

  return (
    <section id="certifications" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label">07 / Certifications</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
            {certifications.length} credentials, one obsession
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {visible.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i % 9) * 0.04 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan/20 transition-colors"
            >
              <Award size={15} className="text-cyan/60 mt-0.5 shrink-0" />
              <div>
                <div className="text-sm text-white leading-snug">{cert.name}</div>
                <div className="text-xs text-slate-2 mt-1 font-mono">{cert.issuer} · {cert.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && certifications.length > 9 && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-8 mx-auto flex items-center gap-2 text-sm font-mono text-cyan hover:text-white transition-colors"
          >
            Show all {certifications.length} certifications <ChevronDown size={14} />
          </button>
        )}
      </div>
    </section>
  );
}
