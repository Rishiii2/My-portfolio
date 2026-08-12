import Reveal from "./Reveal";

export default function SectionHead({
  num,
  title,
  note,
  small = false,
}: {
  num: string;
  title: string;
  note?: string;
  small?: boolean;
}) {
  return (
    <Reveal>
      <div className="sec-head">
        <span className="sec-num">[{num}]</span>
        <h2 className="sec-title" style={small ? { fontSize: "clamp(1.2rem,3vw,1.7rem)" } : undefined}>
          {title}
        </h2>
        {note ? <span className="sec-note">{note}</span> : null}
      </div>
    </Reveal>
  );
}
