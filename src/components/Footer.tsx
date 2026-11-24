import { portfolioData } from '../data/portfolioData';
import { FileCode, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-md bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                AQ
              </div>
              <span className="text-white font-semibold text-base tracking-tight">
                {portfolioData.profile.name} — {portfolioData.profile.title}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Professional portfolio built for IT support, service desk, and network operations roles.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 px-4 py-2.5 rounded-md transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-2 bg-slate-800/60 px-3.5 py-2 rounded-md border border-slate-700/60 text-slate-300">
            <FileCode className="w-3.5 h-3.5 text-blue-400" />
            <span>Edit profile, case studies, and résumé in <strong className="text-white font-mono">/src/data/portfolioData.ts</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
