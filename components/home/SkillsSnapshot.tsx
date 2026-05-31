import Link from "next/link";
import { skills } from "@/lib/data";
import RevealSection from "@/components/ui/RevealSection";

const categoryAccent: Record<string, string> = {
  Languages: "#818cf8",
  "Frameworks & Libraries": "#34d399",
  "Tools & Platforms": "#fb923c",
  Concepts: "#c084fc",
};

export default function SkillsSnapshot() {
  return (
    <section className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label">Skills</p>
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#f2f2f2] tracking-tight">
                Technical Stack
              </h2>
            </div>
            <Link href="/skills"
              className="font-mono text-xs text-[#818cf8] border border-[#6366f1]/25 px-4 py-2 rounded-lg hover:bg-[#6366f1]/10 hover:border-[#6366f1]/40 transition-all hidden md:inline-flex items-center gap-2"
            >
              View Full Stack <span>→</span>
            </Link>
          </div>

          <div className="space-y-3">
            {skills.map((group) => {
              const accent = categoryAccent[group.category] ?? "#818cf8";
              return (
                <div key={group.category}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl"
                >
                  <div className="flex items-center gap-2 sm:w-40 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
                    <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: accent }}>
                      {group.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item}
                        className="font-mono text-xs text-[#aaa] bg-[#080808] border border-[#1a1a1a] px-2.5 py-1 rounded-md"
                      >
                        {item}
                      </span>
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
