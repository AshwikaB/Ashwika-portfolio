"use client";

import { useEffect, useState } from "react";
import { meta } from "@/lib/data";
import Image from "next/image";
import SocialIcons from "@/components/ui/SocialIcons";

const ROLES = [
  "Software Development Engineer",
  "Full-Stack Builder",
  "Problem Solver",
  "Systems Thinker",
];

function useTypewriter(words: string[], speed = 65, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting ? speed / 2 : charIdx === current.length ? pause : speed;
    const t = setTimeout(() => {
      if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx === 0) {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      } else {
        setCharIdx((i) => i + (deleting ? -1 : 1));
        setDisplay(current.slice(0, charIdx + (deleting ? 0 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function Avatar() {
  if (meta.avatar) {
    return (
      <div className="relative w-52 h-52">
        <RingDecor />
        <div className="absolute inset-3 rounded-full overflow-hidden border border-[#1a1a1a]"
          style={{ boxShadow: "0 0 50px rgba(99,102,241,0.2)" }}>
          <Image src={meta.avatar} alt={meta.name} fill className="object-cover" />
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-52 h-52">
      <RingDecor />
      <div className="absolute inset-3 rounded-full flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(145deg, #111111, #0a0a0a)",
          border: "1px solid #1a1a1a",
          boxShadow: "0 0 60px rgba(99,102,241,0.12), inset 0 0 40px rgba(99,102,241,0.03)",
        }}
      >
        <span className="font-sans font-extrabold text-4xl leading-none tracking-tighter select-none"
          style={{
            background: "linear-gradient(135deg, #c7d2fe 0%, #818cf8 50%, #6366f1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >AB</span>
        <span className="font-mono text-[9px] text-[#aaa] tracking-[0.3em] mt-1.5 uppercase">sde</span>
      </div>
    </div>
  );
}

function RingDecor() {
  // C — Pulsing glow halo, no border
  return (
    <>
      <div className="absolute inset-[-8px] rounded-full" style={{
        boxShadow: "0 0 0 1px rgba(99,102,241,0.15)",
        animation: "haloPulse 3s ease-in-out infinite",
      }} />
      <style>{`
        @keyframes haloPulse {
          0%, 100% { box-shadow: 0 0 0 1px rgba(99,102,241,0.15), 0 0 20px rgba(99,102,241,0.15); }
          50%       { box-shadow: 0 0 0 1px rgba(99,102,241,0.35), 0 0 35px rgba(99,102,241,0.25); }
        }
      `}</style>
    </>
  );
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section id="hero" className="dot-grid relative min-h-screen flex items-center pt-16 overflow-hidden">


      <div className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 70% at 10% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)" }} />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to bottom, transparent, #080808)" }} />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-[1fr_220px] gap-16 items-start">

          {/* Left */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-10 rounded-full border border-[#6366f1]/25 bg-[#6366f1]/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366f1] opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#818cf8]" />
              </span>
              <span className="font-mono text-[11px] text-[#818cf8] tracking-[0.15em]">{meta.availabilityBadge}</span>
            </div>

            <h1 className="hero-name font-sans font-extrabold leading-[0.93] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.8rem, 7.5vw, 5.5rem)" }}>
              <span className="text-[#f2f2f2]">{meta.name.split(" ")[0]} </span>
              <span style={{
                background: "linear-gradient(135deg, #a5b4fc 0%, #818cf8 50%, #6366f1 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>{meta.name.split(" ")[1]}</span>
            </h1>

            <div className="hero-role flex items-center gap-2 mb-7">
              <span className="font-mono text-xs text-[#aaa]">{"<"}</span>
              <span className="font-mono text-sm text-[#aaa] min-w-[240px]">
                {role}<span className="typewriter-cursor" />
              </span>
              <span className="font-mono text-xs text-[#aaa]">{"/>"}</span>
            </div>

            <p className="hero-tagline font-sans font-semibold text-[#f2f2f2] leading-tight mb-3"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)", maxWidth: "500px" }}>
              {meta.tagline}
            </p>
            <p className="hero-sub font-sans text-base text-[#aaa] leading-relaxed mb-10" style={{ maxWidth: "440px" }}>
              {meta.taglineSub}
            </p>

            <div className="hero-cta flex flex-wrap gap-3 mb-12">
              {/* Primary — outlined */}
              <a href="/projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 font-sans text-sm font-semibold text-[#f2f2f2] rounded-lg border border-[#2a2a2a] hover:border-[#6366f1]/40 hover:text-[#818cf8] transition-all duration-200 hover:-translate-y-0.5"
              >View My Work</a>
              {/* Secondary — outlined, matches Get in Touch */}
              <a href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 font-sans text-sm font-semibold text-[#f2f2f2] rounded-lg border border-[#2a2a2a] hover:border-[#6366f1]/40 hover:text-[#818cf8] transition-all duration-200 hover:-translate-y-0.5"
              >Get in Touch</a>
              {/* Resume — same outlined style */}
              <a href={meta.resumeUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 font-sans text-sm font-semibold text-[#f2f2f2] rounded-lg border border-[#2a2a2a] hover:border-[#6366f1]/40 hover:text-[#818cf8] transition-all duration-200 hover:-translate-y-0.5"
              >Resume ↗</a>
            </div>

            <div className="hero-social flex items-center gap-4">
              <SocialIcons />
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="hero-avatar hidden lg:flex items-center justify-center relative mt-8">
            {/* Anchor glow behind photo */}
            <div className="absolute w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)", filter: "blur(20px)" }}
            />
            <Avatar />
          </div>
        </div>
      </div>
    </section>
  );
}
