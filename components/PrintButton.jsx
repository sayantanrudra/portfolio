'use client';

import { Download, Printer } from 'lucide-react';

const RESUME_FILENAME = 'Sayantan_Rudra_Resume.pdf';

export default function PrintButton() {
  const resumeUrl = `${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/${RESUME_FILENAME}`;

  return (
    <div className="no-print mb-6 flex flex-wrap justify-end gap-2">
      <a
        href={resumeUrl}
        download={RESUME_FILENAME}
        className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-card border border-border rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-primary/50 hover:bg-card hover:shadow-md"
      >
        <Download className="h-4 w-4" />
        Download PDF
      </a>
      <button
        type="button"
        onClick={() => window.print()}
        className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-card border border-border rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-primary/50 hover:bg-card hover:shadow-md"
      >
        <Printer className="h-4 w-4" />
        Print
      </button>
    </div>
  );
}
