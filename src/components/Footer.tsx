"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [clock, setClock] = useState("—");

  useEffect(() => {
    const tick = () =>
      setClock(
        `IST ${new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Kolkata",
          hour12: false,
        })}`
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="foot-wrap">
      <div className="foot">
        <span>© {new Date().getFullYear()} RISHIKANT · ENGINEERING PHYSICS, DTU</span>
        <span>{clock}</span>
        <span>BUILT WITH NEXT.JS · TAILWIND · CANVAS</span>
      </div>
    </footer>
  );
}
