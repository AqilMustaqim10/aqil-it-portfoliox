import { useState } from 'react';
import { portfolioData, CaseStudy } from '../data/portfolioData';
import { CheckCircle2, ArrowRight, ExternalLink, Activity, Server, LifeBuoy } from 'lucide-react';

export function SelectedWork() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const caseStudies = portfolioData.caseStudies;

  const categories = ['All', 'Network Operations & Support', 'IT Asset Management', 'Technical Support'];

  const filteredStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

  const featuredCaseStudy = caseStudies.find(cs => cs.featured) || caseStudies[0];
  const otherCaseStudies = caseStudies.filter(cs => cs.id !== featuredCaseStudy.id);

  return (
    <section id="work" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div data-reveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">
              Case Studies & Practical Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Selected Work & Incident Handling
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
            Real-world technical workflows focusing on network diagnostics, proactive monitoring, and structured IT support.
          </p>
        </div>

        {/* Featured Case Study: Event Wi-Fi Troubleshooting */}
        {featuredCaseStudy && (
          <div 
            id={featuredCaseStudy.id}
            data-reveal
            className="bg-[#faf9f6] border border-slate-200/90 rounded-2xl p-8 sm:p-12 mb-16 shadow-xs relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-xl shadow-2xs">
              Featured Case Study
            </div>

            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-medium text-blue-600 mb-3">
                <Activity className="w-4 h-4" />
                <span>{featuredCaseStudy.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                {featuredCaseStudy.title}
              </h3>

              <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed font-normal">
                {featuredCaseStudy.subtitle}
              </p>

              {/* Situation & Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-white rounded-xl border border-slate-200/70 shadow-2xs">
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Reported Situation
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {featuredCaseStudy.situation}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Aqil&apos;s Role & Responsibility
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {featuredCaseStudy.role}
                  </p>
                </div>
              </div>

              {/* Checks Performed */}
              {featuredCaseStudy.checksPerformed && (
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    Systematic Checks Performed During Event
                  </h4>
                  <div className="space-y-3">
                    {featuredCaseStudy.checksPerformed.map((check, idx) => (
                      <div key={idx} className="p-4 bg-white rounded-lg border border-slate-200/70">
                        <h5 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                          {check.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                          {check.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Next Step & Outcome */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                {featuredCaseStudy.nextStep && (
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Informed Next Troubleshooting Step
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {featuredCaseStudy.nextStep}
                    </p>
                  </div>
                )}
                {featuredCaseStudy.outcome && (
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Verified Outcome
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium text-slate-900">
                      {featuredCaseStudy.outcome}
                    </p>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-200/60">
                {featuredCaseStudy.tags.map(tag => (
                  <span key={tag} className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Other Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherCaseStudies.map(cs => (
            <div
              key={cs.id}
              id={cs.id}
              data-reveal
              className="bg-[#faf9f6] border border-slate-200/80 rounded-xl p-8 flex flex-col justify-between hover:border-slate-300 transition-all shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/50">
                    {cs.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {cs.title}
                </h3>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {cs.subtitle}
                </p>

                <div className="space-y-4 mb-6 text-sm text-slate-700">
                  <div>
                    <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider text-slate-400 mb-1">Situation</span>
                    {cs.situation}
                  </div>
                  {cs.actions && cs.actions.length > 0 && (
                    <div>
                      <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider text-slate-400 mb-1">Actions Taken</span>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-600">
                        {cs.actions.map((act, i) => (
                          <li key={i}>{act}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {cs.outcome && (
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider text-blue-600 mb-0.5">Outcome</span>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium">{cs.outcome}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60">
                {cs.tags.map(tag => (
                  <span key={tag} className="text-xs bg-white border border-slate-200/80 text-slate-600 px-2.5 py-1 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
