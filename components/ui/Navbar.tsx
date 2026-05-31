"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { meta } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";

const links = [
  { label: "About", href: "/about", id: "about" },
  { label: "Skills", href: "/skills", id: "skills" },
  { label: "Projects", href: "/projects", id: "projects" },
  { label: "Achievements", href: "/achievements", id: "achievements" },
  { label: "Experience", href: "/experience", id: "experience" },
  { label: "Education", href: "/education", id: "education" },
  { label: "Certifications", href: "/certifications", id: "certifications" },
  { label: "Contact", href: "/contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const activeSection = useActiveSection();

  const isActive = (id: string) => {
    if (pathname === "/") return activeSection === id;
    return pathname === `/${id}`;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(8,8,8,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-bold tracking-wider text-[#f2f2f2] hover:text-[#818cf8] transition-colors">
          ab<span className="text-[#6366f1]">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            const active = isActive(l.id);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative font-mono text-[11px] tracking-wider uppercase transition-colors"
                  style={{ color: active ? "#f2f2f2" : "#999999" }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = "#cccccc"; }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = "#999999"; }}
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-px transition-all duration-300"
                    style={{
                      background: "linear-gradient(90deg, transparent, #6366f1, transparent)",
                      opacity: active ? 1 : 0,
                      transform: active ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <a href={meta.resumeUrl} target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 font-mono text-[11px] px-3.5 py-1.5 rounded border border-[#6366f1]/30 text-[#818cf8] hover:bg-[#6366f1]/8 hover:border-[#6366f1]/50 transition-all tracking-wider"
        >
          Resume ↗
        </a>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Toggle menu">
          {[0, 1, 2].map((i) => (
            <span key={i} className="block w-5 h-px bg-[#999] transition-all duration-200"
              style={{
                transform: i === 0 && menuOpen ? "rotate(45deg) translateY(5px)" : i === 2 && menuOpen ? "rotate(-45deg) translateY(-5px)" : "none",
                opacity: i === 1 && menuOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      <div className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          borderBottom: menuOpen ? "1px solid #1a1a1a" : "none",
          background: "rgba(8,8,8,0.96)",
          backdropFilter: "blur(20px)",
        }}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}
                className="font-mono text-sm transition-colors"
                style={{ color: isActive(l.id) ? "#818cf8" : "#999" }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 border-t border-[#1a1a1a]">
            <a href={meta.resumeUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-[#818cf8]">
              Resume ↗
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
