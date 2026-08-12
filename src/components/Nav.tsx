"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#research", label: "RESEARCH" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#hackathons", label: "ARENA" },
  { href: "#stack", label: "STACK" },
  { href: "#writing", label: "WRITING" },
  { href: "#contact", label: "CONTACT" },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setStuck((window.scrollY || 0) > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el !== null
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className={`nav ${stuck ? "stuck" : ""}`}>
      <div className="nav-in">
        <a href="#top" className="brand">
          <span className="dot" />
          RISHIKANT<span style={{ color: "var(--ink-mute)" }}>.SYS</span>
        </a>

        <div className={`nav-links ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={active === l.href ? "on" : ""}>
              {l.label}
            </a>
          ))}
        </div>

        <button className="burger" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>
    </nav>
  );
}
