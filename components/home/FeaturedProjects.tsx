import Link from "next/link";
import { projects } from "@/lib/data";
import RevealSection from "@/components/ui/RevealSection";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <section className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label">Projects</p>
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#f2f2f2] tracking-tight">
                Featured Work
              </h2>
            </div>
            <Link href="/projects"
              className="font-mono text-xs text-[#818cf8] border border-[#6366f1]/25 px-4 py-2 rounded-lg hover:bg-[#6366f1]/10 hover:border-[#6366f1]/40 transition-all hidden md:inline-flex items-center gap-2"
            >
              View All Projects <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {featured.map((project, i) => (
              <div key={i}
                className="group bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-6 hover:border-[#2a2a2a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.05)] flex flex-col"
              >
                <div className="mb-4">
                  <p className="font-mono text-[10px] text-[#aaa] uppercase tracking-widest mb-2">
                    Project {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-sans text-xl font-bold text-[#f2f2f2] mb-1 group-hover:text-[#c7d2fe] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm text-[#aaa]">{project.subtitle}</p>
                </div>

                <p className="text-[#aaa] text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span key={tech} className="font-mono text-[10px] text-[#aaa] bg-[#080808] border border-[#1a1a1a] px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className="font-mono text-[10px] text-[#aaa] px-2 py-0.5">+{project.stack.length - 5}</span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#1a1a1a]">
                  <span className="font-mono text-[10px] text-[#aaa]">{project.period}</span>
                  <div className="flex gap-2">
                    {project.links.map((link) => (
                      <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                        className="font-mono text-xs text-[#818cf8] hover:text-[#a5b4fc] transition-colors"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link href="/projects" className="mt-6 flex md:hidden items-center justify-center gap-2 font-mono text-sm text-[#818cf8] border border-[#6366f1]/25 px-4 py-2.5 rounded-lg hover:bg-[#6366f1]/10 transition-all">
            View All Projects →
          </Link>
        </RevealSection>
      </div>
    </section>
  );
}
