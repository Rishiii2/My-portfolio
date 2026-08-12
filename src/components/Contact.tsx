import Reveal from "./ui/Reveal";
import { interests, personal } from "@/data/portfolio";

const SOCIALS: { label: string; href: string }[] = [
  { label: "GITHUB", href: personal.links.github },
  { label: "LINKEDIN", href: personal.links.linkedin },
  { label: "HASHNODE", href: personal.links.hashnode },
  { label: "LEETCODE", href: personal.links.leetcode },
  { label: "X", href: personal.links.twitter },
  { label: "CHESS", href: personal.links.chess },
];

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <Reveal>
        <h2>
          LET&apos;S BUILD
          <br />
          <span className="stroke">SOMETHING</span>
        </h2>

        <p>
          Open to research collaborations, autonomy and wireless internships, and anything involving
          swarms, surfaces, or agents that actually have to work.
        </p>

        <a className="mail" href={`mailto:${personal.email}`}>
          {personal.email}
        </a>

        <div className="socials">
          {SOCIALS.map((s) => (
            <a className="soc" key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>

        <p
          className="font-mono"
          style={{ fontSize: "10.5px", color: "var(--ink-mute)", marginTop: 34, letterSpacing: ".08em" }}
        >
          {interests.join("  ·  ")}
        </p>
      </Reveal>
    </section>
  );
}
