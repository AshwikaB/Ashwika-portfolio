import { skills } from "@/lib/data";

const allTech = skills.flatMap((s) => s.items);
const items = [...allTech, ...allTech];

export default function TechMarquee() {
  return (
    <div className="relative border-y border-[#1a1a1a] py-4 overflow-hidden bg-[#0a0a0a]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }} />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-5 px-5">
            <span className="font-mono text-xs text-[#aaa] whitespace-nowrap tracking-widest hover:text-[#a5b4fc] transition-colors cursor-default">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#6366f1]/40 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
