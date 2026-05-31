import { about, meta } from "@/lib/data";
import RevealSection from "@/components/ui/RevealSection";

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <p className="section-label">About</p>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#f2f2f2] tracking-tight mb-14">
            Who I Am
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: bio */}
            <div>
              <div className="space-y-5 mb-10">
                {about.paragraphs.map((p, i) => (
                  <p key={i} className="text-[#aaa] text-base leading-[1.85]">{p}</p>
                ))}
              </div>
              <div>
                <p className="font-mono text-[10px] text-[#aaa] uppercase tracking-widest mb-1">Based in</p>
                <p className="font-sans text-sm text-[#aaa]">{meta.location}</p>
              </div>
            </div>

            {/* Right: highlights */}
            <div>
              <p className="font-mono text-[10px] text-[#aaa] uppercase tracking-widest mb-6">Quick highlights</p>
              <div className="space-y-0 border border-[#1a1a1a] rounded-xl overflow-hidden">
                {[
                  "Top 200 of 30,000+ — Google Women Engineers Program",
                  "Built production AI resume platform with Claude API + Docker",
                  "Gamified cybersecurity platform aligned to MITRE ATT&CK",
                  "School Topper · 97.8% ICSE · Physics & Math subject topper",
                ].map((fact, i, arr) => (
                  <div key={i}
                    className={`flex items-start gap-3 px-5 py-4 hover:bg-[#0f0f0f] transition-colors ${i < arr.length - 1 ? "border-b border-[#1a1a1a]" : ""}`}
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-[#6366f1] flex-shrink-0" />
                    <span className="text-[#aaa] text-sm leading-relaxed">{fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
