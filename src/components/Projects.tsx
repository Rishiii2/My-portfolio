"use client";

import { useMemo, useState } from "react";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { projectFilters, projects, type ProjectTag } from "@/data/portfolio";

type Filter = ProjectTag | "all";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const shown = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter]
  );

  return (
    <section className="section" id="projects">
      <SectionHead num="03" title="Projects" note="23 public repositories" />

      <Reveal>
        <div className="filters">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              className={`fbtn ${filter === f.id ? "on" : ""}`}
              onClick={() => setFilter(f.id)}
              type="button"
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid">
        {shown.map((p, i) => {
          const inner = (
            <article className="panel card">
              <div className="card-h">
                <h3>{p.name}</h3>
                {p.badge ? (
                  <span className="badge">{p.badge}</span>
                ) : (
                  <span className="idx">/{String(i + 1).padStart(2, "0")}</span>
                )}
              </div>
              <p>{p.body}</p>
              <div className="stack-row">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </article>
          );

          return (
            <Reveal key={p.name} delay={Math.min(i, 5) * 40}>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", height: "100%" }}>
                  {inner}
                </a>
              ) : (
                inner
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
