"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, ExternalLink } from "lucide-react";
import { personal } from "@/data/portfolio";

const socials = [
  { label: "GitHub",    href: personal.links.github,    icon: Github },
  { label: "LinkedIn",  href: personal.links.linkedin,  icon: Linkedin },
  { label: "X / Twitter", href: personal.links.twitter,  icon: Twitter },
  { label: "Instagram", href: personal.links.instagram, icon: Instagram },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-[length:40px_40px] opacity-50 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">09 / Contact</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-4 leading-tight">
            Let's build something<br /><span className="text-cyan">that ships.</span>
          </h2>
          <p className="text-slate text-base mt-6 max-w-md mx-auto">
            Open to internships, research collaborations, and interesting problems.
            Reach out — I read everything.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-slate hover:text-white hover:border-cyan/40 transition-colors"
              >
                <s.icon size={16} />
                <span className="text-sm font-mono">{s.label}</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-60 transition-opacity" />
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs font-mono text-slate-2">
            <a href={personal.links.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">LeetCode</a>
            <span>·</span>
            <a href={personal.links.hashnode} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">Hashnode</a>
            <span>·</span>
            <a href={personal.links.chess} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">Chess.com</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
