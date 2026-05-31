"use client";

import { useState } from "react";
import { meta } from "@/lib/data";
import RevealSection from "@/components/ui/RevealSection";

const contacts = [
  {
    label: "Email",
    display: meta.email,
    href: `mailto:${meta.email}`,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.2"/></svg>
    ),
  },
  {
    label: "Phone",
    display: meta.phone,
    href: `tel:${meta.phone.replace(/\s|-/g, "")}`,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
    ),
  },
  {
    label: "GitHub",
    display: "github.com/ashwika",
    href: meta.socials.github,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
    ),
  },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/ashwika",
    href: meta.socials.linkedin,
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
    ),
  },
  {
    label: "LeetCode",
    display: "leetcode.com/ashwika",
    href: meta.socials.leetcode,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
    ),
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(meta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <p className="section-label">Contact</p>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#f2f2f2] tracking-tight mb-5">
            Let&apos;s Connect
          </h2>
          <p className="text-[#aaa] text-base leading-relaxed max-w-lg mb-12">
            Open to SDE internships and full-time roles. Have a role, a project, or just want to talk tech? My inbox is open.
          </p>

          {/* Big email CTA — opens Gmail compose */}
          <div className="flex items-center gap-4 mb-14 flex-wrap">
            <a href={meta.gmailUrl} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 hover:-translate-y-0.5 transition-transform duration-200"
            >
              <span className="font-sans text-2xl md:text-3xl font-bold tracking-tight group-hover:underline underline-offset-4"
                style={{
                  background: "linear-gradient(135deg, #a5b4fc, #6366f1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}
              >{meta.email}</span>
              <span className="text-[#6366f1] text-xl">↗</span>
            </a>
            <button onClick={copyEmail}
              className="font-mono text-xs text-[#6366f1] border border-[#6366f1]/30 px-2.5 py-1.5 rounded-lg hover:bg-[#6366f1]/10 transition-all duration-200"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>

          {/* Contact row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {contacts.map(item => (
              <a key={item.label}
                href={item.href.startsWith("mailto") ? meta.gmailUrl : item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl hover:border-[#6366f1]/30 hover:bg-[#6366f1]/5 transition-all duration-250 hover:-translate-y-0.5"
              >
                <span className="text-[#aaa] group-hover:text-[#818cf8] transition-colors flex-shrink-0">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] text-[#aaa] uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className="font-mono text-xs text-[#aaa] group-hover:text-[#818cf8] transition-colors truncate">
                    {item.display}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
