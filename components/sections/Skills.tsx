"use client";

import { skills } from "@/lib/data";
import RevealSection from "@/components/ui/RevealSection";

const categoryAccent: Record<string, string> = {
  Languages: "#818cf8",
  "Frameworks & Libraries": "#34d399",
  "Tools & Platforms": "#fb923c",
  Concepts: "#c084fc",
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <p className="section-label">Skills</p>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#f2f2f2] tracking-tight mb-14">
            Technical Stack
          </h2>

          <div className="space-y-3">
            {skills.map((group) => {
              const accent = categoryAccent[group.category] ?? "#818cf8";
              return (
                <div key={group.category}
                  className="group flex flex-col sm:flex-row sm:items-start gap-4 p-5 bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl hover:border-[#2a2a2a] transition-all duration-200"
                >
                  {/* Category label with color dot */}
                  <div className="flex items-center gap-2.5 sm:w-44 flex-shrink-0 pt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} />
                    <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: accent }}>
                      {group.category}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 flex-1">
                    {group.items.map(item => (
                      <span key={item}
                        className="font-mono text-xs text-[#aaa] bg-[#080808] border border-[#1a1a1a] px-3 py-1.5 rounded-lg hover:text-[#f2f2f2] transition-colors duration-150 cursor-default"
                        style={{ "--hover-border": accent } as React.CSSProperties}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = `${accent}40`;
                          e.currentTarget.style.color = accent;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = "#1a1a1a";
                          e.currentTarget.style.color = "#999";
                        }}
                      >{item}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
