"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { about, meta } from "@/lib/data";
import RevealSection from "@/components/ui/RevealSection";

function useCountUp(target: number, decimals = 0, duration = 1500) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(parseFloat((ease * target).toFixed(decimals)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals, duration]);

  return { val, ref };
}

function AnimatedCGPA() {
  const { val, ref } = useCountUp(8.33, 2, 1800);
  return <span ref={ref}>{val.toFixed(2)}</span>;
}

export default function AboutTeaser() {
  return (
    <section className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
            {/* Left */}
            <div>
              <p className="section-label">About</p>
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#f2f2f2] tracking-tight mb-6">
                Hi, I&apos;m Ashwika.
              </h2>
              <p className="text-[#aaa] text-base leading-[1.85] mb-8 max-w-2xl">
                {about.paragraphs[0]}
              </p>
              <Link href="/about"
                className="inline-flex items-center gap-2 font-mono text-sm text-[#818cf8] hover:text-[#a5b4fc] transition-colors group"
              >
                More about me
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
              </Link>
            </div>

            {/* Right: quick facts */}
            <div className="flex flex-col gap-2">
              {[
                { label: "University", value: "Manipal University Jaipur", animated: false },
                { label: "Degree", value: "B.Tech CSE · 2027", animated: false },
                { label: "CGPA", value: null, animated: true },
                { label: "Location", value: meta.location, animated: false },
              ].map((item) => (
                <div key={item.label}
                  className="group flex items-center justify-between gap-4 px-4 py-3 bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl hover:border-[#6366f1]/20 hover:bg-[#6366f1]/3 transition-all duration-200"
                >
                  <span className="font-mono text-[10px] text-[#aaa] uppercase tracking-widest flex-shrink-0">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-[#aaa] group-hover:text-[#c7d2fe] transition-colors text-right">
                    {item.animated ? (
                      <><AnimatedCGPA /> / 10.0</>
                    ) : item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
