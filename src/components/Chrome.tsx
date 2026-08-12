"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient page chrome: film grain, scanlines, vignette, scroll-progress bar,
 * and the crosshair cursor reticle. All purely decorative and pointer-inert.
 */
export default function Chrome() {
  const progRef = useRef<HTMLDivElement | null>(null);
  const reticRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prog = progRef.current;
    const onScroll = () => {
      if (!prog) return;
      const st = window.scrollY || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = `${h > 0 ? (st / h) * 100 : 0}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ret = reticRef.current;
    if (!ret) return;
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hoverable =
      typeof window.matchMedia === "function" && window.matchMedia("(hover:hover)").matches;
    if (reduced || !hoverable) return;

    let rx = 0;
    let ry = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      ret.style.opacity = "1";
      const t = e.target as Element | null;
      const hot = !!(t && typeof t.closest === "function" && t.closest("a,button,.panel,.hack,.cert"));
      ret.classList.toggle("hot", hot);
    };
    const ease = () => {
      rx += (tx - rx) * 0.22;
      ry += (ty - ry) * 0.22;
      ret.style.left = `${rx}px`;
      ret.style.top = `${ry}px`;
      raf = requestAnimationFrame(ease);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(ease);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <div className="prog" ref={progRef} />
      <div className="grain" />
      <div className="scan" />
      <div className="vig" />
      <div className="retic" ref={reticRef}>
        <i />
      </div>
    </>
  );
}
