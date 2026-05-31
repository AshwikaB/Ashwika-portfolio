import { education } from "@/lib/data";
import RevealSection from "@/components/ui/RevealSection";

export default function Education() {
  return (
    <section id="education" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <p className="section-label">Education</p>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#f2f2f2] tracking-tight mb-14">
            Academic Background
          </h2>

          <div className="space-y-5">
            {education.map((edu, i) => (
              <div key={i}
                className="group bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-7 hover:border-[#2a2a2a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.04)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
                  <div>
                    <h3 className="font-sans text-xl font-bold text-[#f2f2f2] tracking-tight group-hover:text-[#c7d2fe] transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="font-sans text-base text-[#999] mt-1">
                      {edu.degree}{edu.field ? ` — ${edu.field}` : ""}
                    </p>
                    <p className="font-mono text-xs text-[#777] mt-1.5">{edu.location}</p>
                    {edu.note && (
                      <p className="font-mono text-xs text-[#818cf8] mt-2">{edu.note}</p>
                    )}
                  </div>

                  <div className="text-right flex-shrink-0">
                    <div className="font-sans font-extrabold text-3xl leading-none tracking-tight"
                      style={{
                        background: "linear-gradient(135deg, #a5b4fc, #6366f1)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {edu.cgpa ? (
                        <>
                          {edu.cgpa}
                          <span className="text-base font-normal" style={{ WebkitTextFillColor: "#888" }}>
                            /{edu.cgpaMax}
                          </span>
                        </>
                      ) : edu.percentage}
                    </div>
                    <p className="font-mono text-[10px] text-[#777] uppercase tracking-widest mt-1">
                      {edu.cgpa ? "CGPA" : "Score"}
                    </p>
                    <p className="font-mono text-xs text-[#777] mt-1.5">{edu.period}</p>
                  </div>
                </div>

                {edu.coursework.length > 0 && (
                  <div>
                    <p className="font-mono text-[10px] text-[#777] uppercase tracking-widest mb-3">
                      Subjects
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span key={course}
                          className="font-mono text-xs text-[#999] bg-[#080808] border border-[#1a1a1a] px-3 py-1 rounded-md hover:border-[#6366f1]/25 hover:text-[#c7d2fe] transition-all duration-200 cursor-default"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
