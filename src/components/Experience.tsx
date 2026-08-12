import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { jobs } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHead num="02" title="Experience" note="8 roles · 2025 → now" />

      <div className="tl">
        {jobs.map((j) => (
          <Reveal key={j.role}>
            <article className="job">
              <div className="panel job-in">
                <div className="job-top">
                  <h3>
                    {j.role}
                    {j.flag ? <span className="flag">{j.flag}</span> : null}
                  </h3>
                  <span className="when">{j.when}</span>
                </div>
                <p className="org">{j.org}</p>
                <ul>
                  {j.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {j.skills ? (
                  <p
                    className="font-mono"
                    style={{
                      fontSize: "10.5px",
                      color: "var(--ink-mute)",
                      margin: "12px 0 0",
                      letterSpacing: ".04em",
                    }}
                  >
                    {j.skills}
                  </p>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
