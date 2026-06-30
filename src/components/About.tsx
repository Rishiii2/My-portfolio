"use client";
import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[200px_1fr] gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">01 / About</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Building things that move,<br />
            <span className="text-cyan">communicate</span>, and{" "}
            <span className="text-amber">think</span>.
          </h2>

          <p className="mt-6 text-slate text-base leading-relaxed">{personal.bio}</p>

          <p className="mt-4 text-slate text-base leading-relaxed">
            Currently splitting my time across four internships — researching IRS/RIS wireless
            systems at DTU's DoT 5G Lab, building ML pipelines at FlyRank AI, leading autonomous
            mechatronics projects at VAJRON Global, and contributing to open-source at GSSoC.
            Outside of that, I'm usually deep in a ROS2 simulation, a hackathon, or a chess game.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Delhi, India", "B.Tech 1st Year", "Engineering Physics"].map((item) => (
              <span key={item} className="tag">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
