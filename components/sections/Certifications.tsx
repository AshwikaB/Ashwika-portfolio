import { certifications } from "@/lib/data";
import RevealSection from "@/components/ui/RevealSection";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <p className="section-label">Certifications</p>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#f2f2f2] tracking-tight mb-14">
            Courses & Certifications
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div key={i}
                className="group bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-5 hover:border-[#6366f1]/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.05)] transition-all duration-300 flex flex-col"
              >
                {/* Issuer badge */}
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#6366f1]/10 border border-[#6366f1]/20 mb-4 self-start">
                  <span className="font-mono text-[10px] text-[#818cf8] uppercase tracking-widest">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="font-sans font-semibold text-[#f2f2f2] text-base leading-snug mb-3 group-hover:text-[#c7d2fe] transition-colors flex-1">
                  {cert.name}
                </h3>

                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                  <span className="font-mono text-xs text-[#777]">{cert.period}</span>
                  {cert.score && (
                    <span className="font-mono text-xs text-[#777]">Score: {cert.score}</span>
                  )}
                </div>

                {/* View certificate buttons */}
                <div className="flex gap-3 mt-auto pt-3 border-t border-[#1a1a1a]">
                  {cert.certificateFile && (
                    <a href={cert.certificateFile} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-xs text-[#818cf8] border border-[#6366f1]/25 px-3 py-1.5 rounded-lg hover:bg-[#6366f1]/10 hover:border-[#6366f1]/40 transition-all"
                    >
                      View Certificate ↗
                    </a>
                  )}
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-xs text-[#777] hover:text-[#aaa] transition-colors"
                    >
                      Verify ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
