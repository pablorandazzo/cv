"use client";

import { DownloadIcon } from "lucide-react";

export function DownloadCvButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-x-1.5 rounded-md border border-border bg-transparent px-2.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted print:hidden"
      aria-label="Descargar CV en PDF"
      title="Descargar CV en PDF"
    >
      <DownloadIcon className="size-3.5" aria-hidden="true" />
      Descargar CV
    </button>
  );
}
