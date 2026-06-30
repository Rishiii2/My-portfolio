"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { personal } from "@/data/portfolio";

const ROLES = [
  "Robotics Engineer",
  "5G / IRS-RIS Researcher",
  "Deep Learning Builder",
  "Multi-Agent AI Developer",
];

function useTypewriter(words: string[], speed = 60, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

function ParticleField() {
  const [particles, setParticles] = useState<{ x: number; y: number; delay: number; dur: number }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 28 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        dur: 6 + Math.random() * 8,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan/40"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 bg-grid bg-[length:40px_40px] overflow-hidden"
    >
      <ParticleField />

      {/* orbit ring decoration */}
      <div className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-cyan/10" style={{ animation: "orbit 30s linear infinite" }}>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan glow-cyan-sm" />
        </div>
        <div className="absolute inset-[15%] rounded-full border border-amber/10" style={{ animation: "orbit 22s linear infinite reverse" }}>
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber" />
        </div>
        <div className="absolute inset-[32%] rounded-full border border-white/5" />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-cyan/70 mb-6 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          AVAILABLE FOR INTERNSHIPS & COLLABORATIONS
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-[15vw] sm:text-7xl md:text-8xl leading-[0.95] tracking-tight text-white"
        >
          Rishikant
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 font-mono text-lg sm:text-2xl text-cyan h-8"
        >
          {role}
          <span className="cursor-blink">_</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-slate text-base leading-relaxed"
        >
          B.Tech Engineering Physics at <span className="text-white">Delhi Technological University</span>.
          I build autonomous drone swarms in ROS2, research IRS/RIS for next-gen 5G,
          and ship multi-agent AI systems that win hackathons.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-6 py-3 bg-cyan text-space font-semibold text-sm rounded-full hover:glow-cyan transition-shadow"
          >
            View Projects
          </a>
          <a
            href={personal.links.github}
            target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 text-slate hover:text-white hover:border-cyan/40 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 text-slate hover:text-white hover:border-cyan/40 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>

        {/* stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 sm:grid-cols-4 gap-6 max-w-2xl border-t border-white/5 pt-6"
        >
          {[
            ["4", "Active Internships"],
            ["23+", "GitHub Repos"],
            ["8", "Hackathons"],
            ["27", "Certifications"],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="font-display font-bold text-2xl text-white">{num}</div>
              <div className="text-[11px] font-mono text-slate-2 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-2"
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
