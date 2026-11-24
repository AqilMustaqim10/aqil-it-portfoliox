import { portfolioData } from '../data/portfolioData';
import { Mail, Linkedin, Github, ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';

export function AboutContact() {
  const { profile } = portfolioData;

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* About Column (7 cols) */}
          <div data-reveal className="lg:col-span-7">
            <div className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">
              About Aqil
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Dedicated to Reliable IT Operations & Support
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
              {profile.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="p-6 bg-[#faf9f6] rounded-xl border border-slate-200/80 mb-8">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                Based in Malaysia & Ready for Opportunities
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Actively seeking IT Support Officer, Service Desk Analyst, and IT Operations roles where I can contribute technical rigor, proactive monitoring, and meticulous asset management.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {profile.showResumeButton && profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-xs"
                >
                  <span>View Full Résumé</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Contact Column (5 cols) */}
          <div data-reveal className="lg:col-span-5 bg-[#faf9f6] border border-slate-200/90 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">
                Get in Touch
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                Recruiters, hiring managers, and IT teams looking for a dependable IT Officer can reach out directly via email or professional networks below.
              </p>

              {/* Direct Email Link */}
              {profile.email && (
                <div className="mb-6">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Email Address</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2.5 text-sm sm:text-base font-medium text-slate-900 bg-white border border-slate-300 px-4 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all w-full shadow-2xs group"
                  >
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="truncate">{profile.email}</span>
                  </a>
                </div>
              )}

              {/* Social Links (Hidden if empty) */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Professional Profiles</span>
                
                {profile.linkedinUrl && (
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-white border border-slate-300 rounded-lg hover:border-slate-400 text-slate-700 hover:text-slate-900 transition-all shadow-2xs group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">LinkedIn Profile</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}

                {profile.githubUrl && (
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-white border border-slate-300 rounded-lg hover:border-slate-400 text-slate-700 hover:text-slate-900 transition-all shadow-2xs group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-4 h-4 text-slate-800" />
                      <span className="text-sm font-medium">GitHub Repository</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span>Response time: &lt; 24 hours</span>
              <span className="text-blue-600 font-medium">Malaysia Time (GMT+8)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
