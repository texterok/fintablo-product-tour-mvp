"use client";

import { useState } from "react";

export function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {}
      }}
      className="inline-flex items-center gap-1.5 rounded-full border border-[#e8c154]/30 bg-[rgba(232,193,84,0.06)] px-3 py-1 text-[11px] font-medium text-[#e8c154] transition hover:bg-[rgba(232,193,84,0.12)]"
    >
      <span className="text-[14px] leading-none">{copied ? "✓" : "◻"}</span>
      <span>{copied ? "Скопировано" : label ?? "Копировать"}</span>
    </button>
  );
}
