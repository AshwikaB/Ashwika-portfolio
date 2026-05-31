import { experience } from "@/lib/data";
import RevealSection from "@/components/ui/RevealSection";

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <p className="section-label">Experience</p>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#f2f2f2] tracking-tight mb-14">
            Work Experience
          </h2>

          {experience.length === 0 ? (
            <div className="border border-dashed border-[#2a2a2a] rounded-2xl p-12 text-center hover:border-[#6366f1]/20 transition-colors">
              <p className="font-mono text-sm text-[#aaa]">First internship incoming.</p>
              <p className="font-mono text-xs text-[#aaa] mt-1">This section fills up soon.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i}
                  className="group bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-7 hover:border-[#2a2a2a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.04)]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="font-sans font-bold text-[#f2f2f2] text-xl group-hover:text-[#c7d2fe] transition-colors">{exp.role}</h3>
                      <p className="font-mono text-sm text-[#818cf8] mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xs text-[#aaa] border border-[#1a1a1a] px-2.5 py-1 rounded-md">{exp.type}</span>
                      <p className="font-mono text-xs text-[#aaa] mt-1.5">{exp.period}</p>
                      <p className="font-mono text-xs text-[#aaa]">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-[#aaa] text-sm mb-5">{exp.description}</p>
                  <div className="space-y-2.5 mb-5">
                    {exp.highlights.map((h, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#6366f1] flex-shrink-0" />
                        <span className="text-[#aaa] text-sm leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="font-mono text-[11px] text-[#aaa] bg-[#080808] border border-[#1a1a1a] px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </RevealSection>
      </div>
    </section>
  );
}
