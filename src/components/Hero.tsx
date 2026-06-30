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

// Signature element: an animated signal/neural constellation.
// Nodes = domains (Robotics, 5G, AI, Vision, Systems), edges = how they connect,
// with lines that draw themselves in, nodes that pulse, and light particles
// that travel along edges — echoing signal propagation / network topology.
type Node = { id: string; x: number; y: number; label: string; r: number };
type Edge = { from: string; to: string; delay: number };

const NODES: Node[] = [
  { id: "core",  x: 250, y: 250, label: "",          r: 7 },
  { id: "robo",  x: 110, y: 130, label: "Robotics",  r: 5 },
  { id: "5g",    x: 390, y: 110, label: "5G / RIS",  r: 5 },
  { id: "ai",    x: 420, y: 320, label: "Deep Learning", r: 5 },
  { id: "vis",   x: 150, y: 380, label: "Vision",    r: 5 },
  { id: "agent", x: 320, y: 430, label: "Multi-Agent", r: 5 },
];

const EDGES: Edge[] = [
  { from: "core", to: "robo",  delay: 0 },
  { from: "core", to: "5g",    delay: 0.15 },
  { from: "core", to: "ai",    delay: 0.3 },
  { from: "core", to: "vis",   delay: 0.45 },
  { from: "core", to: "agent", delay: 0.6 },
  { from: "robo", to: "vis",   delay: 0.75 },
  { from: "5g",   to: "ai",    delay: 0.9 },
];

function findNode(id: string) { return NODES.find((n) => n.id === id)!; }

function SignalConstellation() {
  return (
    <div className="relative w-[420px] h-[420px] sm:w-[480px] sm:h-[480px]">
      <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* faint background rings for depth */}
        <circle cx="250" cy="250" r="220" fill="none" stroke="#00D4FF" strokeOpacity="0.04" />
        <circle cx="250" cy="250" r="160" fill="none" stroke="#00D4FF" strokeOpacity="0.05" />

        {/* edges: draw themselves in, then carry traveling light pulses */}
        {EDGES.map((e, i) => {
          const a = findNode(e.from);
          const b = findNode(e.to);
          const len = Math.hypot(b.x - a.x, b.y - a.y);
          return (
            <g key={i}>
              <motion.line
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke="#00D4FF" strokeWidth="1" strokeOpacity="0.18"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: e.delay, ease: "easeOut" }}
              />
              {/* traveling pulse */}
              <motion.circle
                r="2.2"
                fill="#00D4FF"
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 2.4,
                  delay: 1.2 + e.delay,
                  repeat: Infinity,
                  repeatDelay: 1.4 + (i % 3) * 0.4,
                  ease: "linear",
                }}
                style={{
                  offsetPath: `path("M ${a.x} ${a.y} L ${b.x} ${b.y}")`,
                }}
              />
            </g>
          );
        })}

        {/* core node — the biggest, glowing */}
        <motion.circle
          cx={findNode("core").x} cy={findNode("core").y} r="40"
          fill="url(#coreGlow)"
          animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx={findNode("core").x} cy={findNode("core").y} r={findNode("core").r}
          fill="#00D4FF"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
        />

        {/* domain nodes */}
        {NODES.filter((n) => n.id !== "core").map((n, i) => (
          <g key={n.id}>
            <motion.circle
              cx={n.x} cy={n.y} r={n.r + 8}
              fill="none" stroke="#00D4FF" strokeOpacity="0.25" strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle
              cx={n.x} cy={n.y} r={n.r}
              fill={n.id === "5g" ? "#F59E0B" : "#00D4FF"}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1, type: "spring" }}
            />
            <motion.text
              x={n.x}
              y={n.y - n.r - 12}
              textAnchor="middle"
              fontSize="11"
              fontFamily="var(--font-mono)"
              fill="#94A3B8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
            >
              {n.label}
            </motion.text>
          </g>
        ))}
      </svg>

      {/* slow ambient rotation of the whole constellation for life */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "center" }}
      >
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber/50" />
        <div className="absolute bottom-[12%] right-[15%] w-1 h-1 rounded-full bg-cyan/40" />
      </motion.div>
    </div>
  );
}

function ParticleField() {
  const [particles, setParticles] = useState<{ x: number; y: number; delay: number; dur: number }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 16 }, () => ({
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
          className="absolute w-1 h-1 rounded-full bg-cyan/30"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.15, 0.6, 0.15] }}
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

      {/* signature animated signal constellation */}
      <div className="hidden lg:flex items-center justify-center absolute right-[2%] top-1/2 -translate-y-1/2 pointer-events-none">
        <SignalConstellation />
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
