import Link from "next/link";
import { achievements } from "@/lib/data";
import RevealSection from "@/components/ui/RevealSection";

export default function AchievementsSnapshot() {
  const top = achievements.slice(0, 2);

  return (
    <section className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label">Achievements</p>
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#f2f2f2] tracking-tight">
                Recognition
              </h2>
            </div>
            <Link href="/achievements"
              className="font-mono text-xs text-[#818cf8] border border-[#6366f1]/25 px-4 py-2 rounded-lg hover:bg-[#6366f1]/10 hover:border-[#6366f1]/40 transition-all hidden md:inline-flex items-center gap-2"
            >
              View All <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {top.map((a, i) => (
              <div key={i}
                className="group bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-6 hover:border-[#6366f1]/25 transition-all duration-300"
              >
                <p className="font-mono text-[10px] text-[#aaa] uppercase tracking-widest mb-1">
                  {a.org} · {a.period}
                </p>
                <h3 className="font-sans font-bold text-[#f2f2f2] text-lg mb-3 group-hover:text-[#c7d2fe] transition-colors">
                  {a.title}
                </h3>
                <p className="text-[#aaa] text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
