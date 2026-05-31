"use client";

import { useEffect, useRef, useState } from "react";
import { achievements } from "@/lib/data";
import RevealSection from "@/components/ui/RevealSection";

export default function Achievements() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <p className="section-label">Achievements</p>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#f2f2f2] tracking-tight mb-14">
            Recognition
          </h2>
        </RevealSection>

        {/* Plain grid — no wrapper divs on children */}
        <div ref={gridRef} className="grid md:grid-cols-3 gap-5 items-stretch">
          {achievements.map((a, i) => (
            <div key={i}
              className="group relative bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-6 hover:border-[#6366f1]/25 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-[0_0_30px_rgba(99,102,241,0.06)]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse at top left, rgba(99,102,241,0.05), transparent 60%)" }}
              />
              <p className="font-mono text-[10px] text-[#aaa] uppercase tracking-widest mb-1">
                {a.org} · {a.period}
              </p>
              <h3 className="font-sans font-bold text-[#f2f2f2] text-lg leading-snug mb-3 group-hover:text-[#c7d2fe] transition-colors">
                {a.title}
              </h3>
              <p className="text-[#aaa] text-sm leading-relaxed mb-5 flex-1">{a.description}</p>
              <div className="space-y-2 pt-4 border-t border-[#1a1a1a]">
                {a.highlights.map((h, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#6366f1] flex-shrink-0" />
                    <span className="text-[#aaa] text-xs leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
