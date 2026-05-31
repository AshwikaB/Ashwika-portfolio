"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-transparent">
      <div
        className="h-full transition-none"
        style={{
          width: `${pct}%`,
          background: "linear-gradient(90deg, #6366f1, #818cf8, #a5b4fc)",
          boxShadow: "0 0 8px rgba(99,102,241,0.6)",
        }}
      />
    </div>
  );
}
