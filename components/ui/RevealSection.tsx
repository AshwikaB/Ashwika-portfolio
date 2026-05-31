"use client";

import { useReveal } from "@/hooks/useReveal";

export default function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function RevealStagger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal-stagger ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
