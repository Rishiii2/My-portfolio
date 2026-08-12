import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { personal, posts, totalPosts } from "@/data/portfolio";

export default function Writing() {
  return (
    <section className="section" id="writing">
      <SectionHead num="06" title="Writing" note={`${totalPosts} posts · Exploring Architecture`} />

      <Reveal>
        <div className="posts">
          {posts.map((p) => (
            <a
              className="post"
              key={p.title}
              href={personal.links.hashnode}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="pt">{p.title}</span>
              <span className="m">{p.meta}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
