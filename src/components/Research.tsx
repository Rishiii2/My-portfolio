"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { papers, type Paper, type TeleRow } from "@/data/portfolio";

/** Lap-time comparison bars — animate their width in once visible. */
function Telemetry({ rows, caption, captionHot }: { rows: TeleRow[]; caption: string; captionHot: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setGo(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setGo(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="tele" ref={ref}>
      {rows.map((r, i) => (
        <div className="tele-row" key={r.label}>
          <span className="lb">{r.label}</span>
          <span className={`bar ${r.tone}`}>
            <i style={{ width: go ? `${r.width}%` : 0, transitionDelay: `${i * 130}ms` }} />
          </span>
          <span className="vl">{r.value}</span>
        </div>
      ))}
      <p className="tele-cap">
        {caption}
        <b>{captionHot}</b> — faster than the human reference lap while staying collision-free.
      </p>
    </div>
  );
}

function PaperCard({ p }: { p: Paper }) {
  return (
    <Reveal>
      <article className="panel paper">
        <div className="paper-top">
          <h3>{p.title}</h3>
          <span className={`status ${p.statusTone}`}>{p.status}</span>
        </div>
        <p className="sub">{p.sub}</p>
        {p.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        {p.telemetry ? (
          <Telemetry
            rows={p.telemetry.rows}
            caption={p.telemetry.caption}
            captionHot={p.telemetry.captionHot}
          />
        ) : null}

        <div className="chips">
          {(p.hotChips ?? []).map((c) => (
            <span className="chip hot" key={c}>
              {c}
            </span>
          ))}
          {p.chips.map((c) => (
            <span className="chip" key={c}>
              {c}
            </span>
          ))}
        </div>

        {p.repo ? (
          <div className="chips">
            <a className="chip hot" href={p.repo.href} target="_blank" rel="noopener noreferrer">
              ↗ {p.repo.label}
            </a>
          </div>
        ) : null}
      </article>
    </Reveal>
  );
}

export default function Research() {
  return (
    <section className="section" id="research">
      <SectionHead num="01" title="Research" note="4 active · NeurIPS workshop track" />
      <div className="papers">
        {papers.map((p) => (
          <PaperCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
