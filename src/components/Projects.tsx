"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

type Project = typeof projects[number];

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <span className="section-label">04 / Projects</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
              Things I've built
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full border transition-colors ${
                  filter === cat
                    ? "bg-cyan text-space border-cyan"
                    : "border-white/10 text-slate hover:text-white hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p, i) => (
            <motion.button
              key={p.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelected(p)}
              className={`text-left relative p-6 rounded-2xl border transition-all group overflow-hidden ${
                p.featured
                  ? "bg-gradient-to-br from-cyan/[0.06] to-transparent border-cyan/20 hover:border-cyan/50"
                  : "bg-white/[0.02] border-white/5 hover:border-white/20"
              }`}
            >
              {p.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-mono text-amber bg-amber/10 border border-amber/20 px-2 py-0.5 rounded-full">
                  {p.badge}
                </span>
              )}
              <div className="text-[10px] font-mono text-slate-2 uppercase tracking-wider mb-2">{p.category}</div>
              <h3 className="font-display font-semibold text-lg text-white mb-1 pr-16">{p.title}</h3>
              <div className="text-cyan text-xs mb-3">{p.subtitle}</div>
              <p className="text-slate text-sm leading-relaxed line-clamp-3">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-2">{t}</span>
                ))}
                {p.tags.length > 3 && (
                  <span className="text-[10px] font-mono px-2 py-0.5 text-slate-2">+{p.tags.length - 3}</span>
                )}
              </div>

              <div className="mt-4 flex items-center gap-1 text-xs text-cyan/70 group-hover:text-cyan transition-colors">
                View details <ArrowUpRight size={12} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-space/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-navy border border-white/10 rounded-2xl p-8"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 text-slate hover:text-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {selected.badge && (
                <span className="text-[10px] font-mono text-amber bg-amber/10 border border-amber/20 px-2 py-0.5 rounded-full">
                  {selected.badge}
                </span>
              )}
              <div className="text-[10px] font-mono text-slate-2 uppercase tracking-wider mt-3 mb-1">{selected.category}</div>
              <h3 className="font-display font-bold text-2xl text-white mb-1">{selected.title}</h3>
              <div className="text-cyan text-sm mb-4">{selected.subtitle}</div>
              <p className="text-slate text-sm leading-relaxed mb-6">{selected.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {selected.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <a
                href={selected.github}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono px-4 py-2 rounded-full bg-cyan text-space font-semibold hover:glow-cyan transition-shadow"
              >
                <Github size={14} /> View on GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
