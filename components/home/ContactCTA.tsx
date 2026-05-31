"use client";

import { meta } from "@/lib/data";
import SocialIcons from "@/components/ui/SocialIcons";
import RevealSection from "@/components/ui/RevealSection";

export default function ContactCTA() {
  return (
    <section className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="section-label">Contact</p>
              <h2 className="font-sans text-2xl md:text-3xl font-bold text-[#f2f2f2] tracking-tight mb-3">
                Let&apos;s build something together.
              </h2>
              <p className="text-[#aaa] text-sm max-w-md leading-relaxed">
                Open to SDE internships and full-time roles. Have an idea or a role in mind? Reach out.
              </p>
            </div>
            <div className="flex flex-col gap-4 flex-shrink-0">
              <a href={meta.gmailUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 font-mono text-sm font-medium text-white rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #6366f1, #4f46e5)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 25px rgba(99,102,241,0.4)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                Say Hello ↗
              </a>
              <SocialIcons className="justify-center md:justify-start" />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
