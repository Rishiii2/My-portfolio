import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { certifications, education, skills, totalCertifications } from "@/data/portfolio";

export default function Stack() {
  return (
    <section className="section" id="stack">
      <SectionHead num="05" title="Stack" note="Tooling & domains" />

      <div className="skills">
        {skills.map((g) => (
          <Reveal key={g.category}>
            <div className="panel skl">
              <h4>{g.category}</h4>
              <div className="chips">
                {g.hot ? <span className="chip hot">{g.hot}</span> : null}
                {g.items.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div style={{ marginTop: 64 }}>
        <SectionHead
          num="05.1"
          title="Credentials"
          note={`Selected · ${certifications.length} of ${totalCertifications}`}
          small
        />
        <Reveal>
          <div className="certs">
            {certifications.map((c, i) => (
              <div className="cert" key={c.name}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <b>{c.name}</b>
                  <span>{c.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div style={{ marginTop: 64 }}>
        <SectionHead num="05.2" title="Education" small />
        <Reveal>
          <div className="edu">
            {education.map((e) => (
              <div className="edu-row" key={e.what}>
                <div>
                  <b>{e.what}</b>
                  {e.note ? <span className="note">{e.note}</span> : null}
                </div>
                <span className="when">{e.when}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
