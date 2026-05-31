import Link from "next/link";
import { certifications } from "@/lib/data";
import RevealSection from "@/components/ui/RevealSection";

export default function CertificationsSnapshot() {
  return (
    <section className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label">Certifications</p>
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#f2f2f2] tracking-tight">
                Courses & Certifications
              </h2>
            </div>
            <Link href="/certifications"
              className="font-mono text-xs text-[#818cf8] border border-[#6366f1]/25 px-4 py-2 rounded-lg hover:bg-[#6366f1]/10 hover:border-[#6366f1]/40 transition-all hidden md:inline-flex items-center gap-2"
            >
              View All <span>→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div key={i}
                className="group bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-5 hover:border-[#6366f1]/30 transition-all duration-300 flex flex-col"
              >
                <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#6366f1]/10 border border-[#6366f1]/20 mb-4 self-start">
                  <span className="font-mono text-[10px] text-[#818cf8] uppercase tracking-widest">
                    {cert.issuer}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-[#f2f2f2] text-sm leading-snug mb-3 flex-1 group-hover:text-[#c7d2fe] transition-colors">
                  {cert.name}
                </h3>
                <div className="flex items-center justify-between pt-3 border-t border-[#1a1a1a]">
                  <span className="font-mono text-[10px] text-[#777]">{cert.period}</span>
                  {cert.certificateFile && (
                    <a href={cert.certificateFile} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-[10px] text-[#818cf8] hover:text-[#a5b4fc] transition-colors"
                    >
                      View ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Link href="/certifications" className="mt-5 flex md:hidden items-center justify-center gap-2 font-mono text-sm text-[#818cf8] border border-[#6366f1]/25 px-4 py-2.5 rounded-lg hover:bg-[#6366f1]/10 transition-all">
            View All →
          </Link>
        </RevealSection>
      </div>
    </section>
  );
}
