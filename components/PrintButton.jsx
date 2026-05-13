'use client';

import { Download, Printer } from 'lucide-react';
import Link from 'next/link';

const RESUME_FILENAME = 'Sayantan_Rudra_Resume.pdf';

export default function PrintButton() {
  return (
    <div className="no-print mb-6 flex flex-wrap justify-end gap-2">
      <Link href="/api/resume" passHref legacyBehavior>
        <a
        download={RESUME_FILENAME}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
      >
        <Download className="h-4 w-4" />
        Download PDF
      </a></Link>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
      >
        <Printer className="h-4 w-4" />
        Print
      </button>
    </div>
  );
}
