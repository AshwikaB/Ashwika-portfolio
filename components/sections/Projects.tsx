"use client";

import { projects } from "@/lib/data";
import RevealSection from "@/components/ui/RevealSection";

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  live: { label: "Live", color: "#4ade80", bg: "rgba(74,222,128,0.08)" },
  "in-progress": { label: "In Progress", color: "#fbbf24", bg: "rgba(251,191,36,0.08)" },
  archived: { label: "Archived", color: "#525252", bg: "rgba(82,82,82,0.08)" },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <p className="section-label">Projects</p>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#f2f2f2] tracking-tight mb-14">
            What I&apos;ve Built
          </h2>

          <div className="space-y-6">
            {projects.map((project, i) => {
              const status = statusConfig[project.status];
              return (
                <article key={i}
                  className="group relative bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl overflow-hidden hover:border-[#2a2a2a] transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.05)]"
                >
                  {/* Animated left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{ background: "linear-gradient(to bottom, transparent, #6366f1, transparent)" }}
                  />

                  {/* Header */}
                  <div className="px-7 pt-7 pb-6 border-b border-[#1a1a1a] bg-[#0f0f0f]">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] text-[#aaa] tracking-[0.2em] uppercase mb-2">
                          Project {String(i + 1).padStart(2, "0")}
                        </p>
                        <h3 className="font-sans text-2xl font-bold text-[#f2f2f2] tracking-tight group-hover:text-[#c7d2fe] transition-colors">
                          {project.title}
                        </h3>
                        <p className="font-mono text-sm text-[#aaa] mt-1">{project.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="font-mono text-[11px] px-3 py-1 rounded-full border"
                          style={{ color: status.color, background: status.bg, borderColor: `${status.color}30` }}>
                          ● {status.label}
                        </span>
                        <span className="font-mono text-xs text-[#aaa]">{project.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="px-7 py-6">
                    <p className="text-[#aaa] text-sm leading-[1.85] mb-6 max-w-3xl">{project.description}</p>
                    <div className="space-y-2.5 mb-6">
                      {project.highlights.map((h, j) => (
                        <div key={j} className="flex items-start gap-3 group/item">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#6366f1] flex-shrink-0 group-hover/item:shadow-[0_0_4px_#6366f1] transition-shadow" />
                          <span className="text-[#aaa] text-sm leading-relaxed group-hover/item:text-[#c7d2fe] transition-colors">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#1a1a1a]">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span key={tech}
                            className="font-mono text-[11px] text-[#aaa] bg-[#080808] border border-[#1a1a1a] px-2.5 py-1 rounded-md hover:border-[#6366f1]/25 hover:text-[#c7d2fe] transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.links.map((link) => (
                          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                            className="font-mono text-xs text-[#818cf8] border border-[#6366f1]/25 px-3.5 py-1.5 rounded-lg hover:bg-[#6366f1]/10 hover:border-[#6366f1]/50 transition-all duration-200 hover:-translate-y-0.5"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
