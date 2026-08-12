import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { hackathons } from "@/data/portfolio";

export default function Hackathons() {
  return (
    <section className="section" id="hackathons">
      <SectionHead num="04" title="The Arena" note="11 competitions · 2026" />

      <Reveal>
        <div className="hacks">
          {hackathons.map((h) => (
            <div className="hack" key={h.name}>
              <div>
                <h4>
                  {h.name}
                  {h.win ? <span className="win"> {h.win}</span> : null}
                </h4>
                <p className="d">{h.detail}</p>
              </div>
              <span className="when">{h.when}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
