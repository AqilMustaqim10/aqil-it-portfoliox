import { ArrowRight, Download, ShieldCheck, Cpu, Wifi } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { motion, useReducedMotion } from 'motion/react';

export function Hero() {
  const { profile } = portfolioData;
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-200/60 bg-[#faf9f6]">
      {/* Subtle grid background accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Available for IT Support & Operations Roles in Malaysia
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Hi, I&apos;m <span className="text-blue-600">{profile.name}</span>. <br />
            {profile.title}.
          </h1>

          {/* Introduction */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-normal">
            {profile.tagline}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-all shadow-xs group focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {profile.showResumeButton && profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-slate-700 border border-slate-300 font-medium text-sm hover:border-slate-400 hover:text-slate-900 transition-all shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Download Résumé</span>
              </a>
            )}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-600"
            >
              Get in Touch
            </a>
          </div>

          {/* Core competency highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-16 mt-16 border-t border-slate-200/80">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-white border border-slate-200 text-blue-600 shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Technical Support</h3>
                <p className="text-xs text-slate-500 mt-0.5">Rapid troubleshooting & user assistance</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-white border border-slate-200 text-blue-600 shadow-2xs">
                <Wifi className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Network Monitoring</h3>
                <p className="text-xs text-slate-500 mt-0.5">AP uptime & speed test diagnostics</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-white border border-slate-200 text-blue-600 shadow-2xs">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">IT Asset Tracking</h3>
                <p className="text-xs text-slate-500 mt-0.5">Hardware inventory & lifecycle audits</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
