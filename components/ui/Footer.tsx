import { meta } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-[#f2f2f2]">
            ab<span className="text-[#6366f1]">.</span>
          </span>
          <span className="text-[#1a1a1a]">|</span>
          <span className="font-mono text-xs text-[#aaa]">{meta.name}</span>
        </div>
        <p className="font-mono text-xs text-[#aaa]">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
