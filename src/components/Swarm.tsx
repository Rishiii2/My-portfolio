"use client";

import { useEffect, useRef } from "react";

type Agent = { x: number; y: number; vx: number; vy: number; r: number; lead: boolean };

export type SwarmReadout = { agents: number; links: number; fps: number };

/**
 * Boids-style drone swarm rendered to a canvas behind the hero.
 * Separation / alignment / cohesion, plus attraction toward the cursor.
 * A subset of agents render as amber tracking reticles.
 *
 * Calls `onReadout` roughly twice a second so the hero HUD can display
 * live agent / link / FPS counters without re-rendering every frame.
 */
export default function Swarm({ onReadout }: { onReadout?: (r: SwarmReadout) => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const readoutRef = useRef<typeof onReadout>(undefined);

  useEffect(() => {
    readoutRef.current = onReadout;
  }, [onReadout]);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    let agents: Agent[] = [];
    let linkCount = 0;
    let raf = 0;
    const mouse = { x: -9999, y: -9999, on: false };

    const size = () => {
      const rect = cv.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      cv.width = Math.max(1, Math.round(W * DPR));
      cv.height = Math.max(1, Math.round(H * DPR));
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const seed = () => {
      const n = W < 640 ? 26 : W < 1100 ? 40 : 58;
      agents = [];
      for (let i = 0; i < n; i++) {
        agents.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.9,
          vy: (Math.random() - 0.5) * 0.9,
          r: Math.random() * 1.6 + 0.9,
          lead: i % 13 === 0,
        });
      }
    };

    const step = () => {
      const SEP = 34;
      const NEI = 118;
      const MAXV = 1.35;
      for (let i = 0; i < agents.length; i++) {
        const a = agents[i];
        let ax = 0;
        let ay = 0;
        let cx = 0;
        let cy = 0;
        let sx = 0;
        let sy = 0;
        let cnt = 0;
        for (let j = 0; j < agents.length; j++) {
          if (i === j) continue;
          const b = agents[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < NEI * NEI && d2 > 0) {
            const d = Math.sqrt(d2);
            cx += b.x;
            cy += b.y;
            ax += b.vx;
            ay += b.vy;
            cnt++;
            if (d < SEP) {
              sx -= dx / d;
              sy -= dy / d;
            }
          }
        }
        if (cnt) {
          a.vx += (cx / cnt - a.x) * 0.00045 + (ax / cnt - a.vx) * 0.035 + sx * 0.045;
          a.vy += (cy / cnt - a.y) * 0.00045 + (ay / cnt - a.vy) * 0.035 + sy * 0.045;
        }
        if (mouse.on) {
          const mdx = mouse.x - a.x;
          const mdy = mouse.y - a.y;
          const md = Math.sqrt(mdx * mdx + mdy * mdy);
          if (md < 230 && md > 1) {
            a.vx += (mdx / md) * 0.045;
            a.vy += (mdy / md) * 0.045;
          }
        }
        const sp = Math.sqrt(a.vx * a.vx + a.vy * a.vy);
        if (sp > MAXV) {
          a.vx = (a.vx / sp) * MAXV;
          a.vy = (a.vy / sp) * MAXV;
        }
        if (sp < 0.22) {
          a.vx += (Math.random() - 0.5) * 0.1;
          a.vy += (Math.random() - 0.5) * 0.1;
        }
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < -20) a.x = W + 20;
        if (a.x > W + 20) a.x = -20;
        if (a.y < -20) a.y = H + 20;
        if (a.y > H + 20) a.y = -20;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const LINK = 126;
      linkCount = 0;
      for (let i = 0; i < agents.length; i++) {
        for (let j = i + 1; j < agents.length; j++) {
          const a = agents[i];
          const b = agents[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            const alpha = (1 - Math.sqrt(d2) / LINK) * 0.3;
            ctx.strokeStyle = `rgba(34,211,238,${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            linkCount++;
          }
        }
      }
      for (let k = 0; k < agents.length; k++) {
        const p = agents[k];
        if (p.lead) {
          const s = 13;
          ctx.strokeStyle = "rgba(255,176,32,.75)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x - s, p.y - s + 4);
          ctx.lineTo(p.x - s, p.y - s);
          ctx.lineTo(p.x - s + 4, p.y - s);
          ctx.moveTo(p.x + s - 4, p.y - s);
          ctx.lineTo(p.x + s, p.y - s);
          ctx.lineTo(p.x + s, p.y - s + 4);
          ctx.moveTo(p.x + s, p.y + s - 4);
          ctx.lineTo(p.x + s, p.y + s);
          ctx.lineTo(p.x + s - 4, p.y + s);
          ctx.moveTo(p.x - s + 4, p.y + s);
          ctx.lineTo(p.x - s, p.y + s);
          ctx.lineTo(p.x - s, p.y + s - 4);
          ctx.stroke();
          ctx.fillStyle = "rgba(255,176,32,.95)";
        } else {
          ctx.fillStyle = "rgba(34,211,238,.85)";
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let last = performance.now();
    let frames = 0;
    let acc = 0;

    const loop = (t: number) => {
      const dt = t - last;
      last = t;
      frames++;
      acc += dt;
      if (acc > 500) {
        readoutRef.current?.({
          agents: agents.length,
          links: linkCount,
          fps: Math.round(frames / (acc / 1000)),
        });
        frames = 0;
        acc = 0;
      }
      step();
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      size();
      seed();
      if (reduced) draw();
    };
    const onMove = (e: PointerEvent) => {
      const rect = cv.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.on = true;
    };
    const onLeave = () => {
      mouse.on = false;
    };

    size();
    seed();
    window.addEventListener("resize", onResize, { passive: true });
    cv.addEventListener("pointermove", onMove, { passive: true });
    cv.addEventListener("pointerleave", onLeave, { passive: true });

    if (reduced) {
      draw();
      readoutRef.current?.({ agents: agents.length, links: linkCount, fps: 0 });
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      cv.removeEventListener("pointermove", onMove);
      cv.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="swarm" aria-hidden="true" />;
}
