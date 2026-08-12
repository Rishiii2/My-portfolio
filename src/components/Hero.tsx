"use client";

import { useEffect, useRef, useState } from "react";
import Swarm, { type SwarmReadout } from "./Swarm";
import { heroLines, personal, stats } from "@/data/portfolio";

/** Counts 0 → value with an ease-out cubic once scrolled into view. */
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLElement | null>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setN(value);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          const t0 = performance.now();
          const dur = 1100;
          const tick = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [value]);

  return <b ref={ref}>{n}</b>;
}

/** Types the hero lines out character by character, tag-safe. */
function Typewriter() {
  const [done, setDone] = useState<number>(0);
  const [chars, setChars] = useState<number>(0);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInstant(true);
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    let line = 0;
    let col = 0;

    const run = () => {
      const raw = heroLines[line];
      if (!raw) return;
      const full = (raw.hot ?? "") + raw.text;
      col += 1;
      setChars(col);
      if (col >= full.length) {
        line += 1;
        col = 0;
        setDone(line);
        setChars(0);
        if (line < heroLines.length) timer = setTimeout(run, 240);
      } else {
        timer = setTimeout(run, 11);
      }
    };
    timer = setTimeout(run, 350);
    return () => clearTimeout(timer);
  }, []);

  if (instant) {
    return (
      <p className="role">
        {heroLines.map((l, i) => (
          <span key={i}>
            {"> "}
            {l.hot ? <span className="c">{l.hot}</span> : null}
            {l.text}
            <br />
          </span>
        ))}
      </p>
    );
  }

  return (
    <p className="role">
      {heroLines.map((l, i) => {
        if (i < done) {
          return (
            <span key={i}>
              {"> "}
              {l.hot ? <span className="c">{l.hot}</span> : null}
              {l.text}
              <br />
            </span>
          );
        }
        if (i > done) return null;
        const hotLen = (l.hot ?? "").length;
        const hotPart = (l.hot ?? "").slice(0, Math.min(chars, hotLen));
        const textPart = chars > hotLen ? l.text.slice(0, chars - hotLen) : "";
        return (
          <span key={i}>
            {"> "}
            {hotPart ? <span className="c">{hotPart}</span> : null}
            {textPart}
            <span className="caret" />
          </span>
        );
      })}
    </p>
  );
}

export default function Hero() {
  const [readout, setReadout] = useState<SwarmReadout>({ agents: 0, links: 0, fps: 0 });

  return (
    <header className="hero" id="top">
      <Swarm onReadout={setReadout} />
      <div className="hero-grid" />

      <span className="corner a" />
      <span className="corner b" />
      <span className="corner c" />
      <span className="corner d" />

      <div className="hud tl">
        SYS // <b>NOMINAL</b>
        <br />
        NODE // DELHI, IN
        <br />
        YEAR // DTU &apos;29
      </div>
      <div className="hud tr">
        SWARM AGENTS // <b>{readout.agents || "—"}</b>
        <br />
        LINKS // <b>{readout.links || "—"}</b>
        <br />
        FPS // <b>{readout.fps || "—"}</b>
      </div>
      <div className="hud bl">SCROLL TO ENGAGE ↓</div>
      <div className="hud br">v5.0 // 2026</div>

      <div className="hero-in">
        <span className="tag">
          <span className="dot" />4 PAPERS IN PROGRESS · NeurIPS WORKSHOP TRACK
        </span>

        <h1 className="h1">
          {personal.first}
          <span className="stroke">{personal.last}</span>
        </h1>

        <Typewriter />

        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <Counter value={s.value} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="cta">
          <a className="btn solid" href="#research">
            VIEW RESEARCH →
          </a>
          <a className="btn" href={personal.links.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a className="btn" href={`mailto:${personal.email}`}>
            GET IN TOUCH
          </a>
        </div>
      </div>
    </header>
  );
}
