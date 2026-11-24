import { portfolioData } from '../data/portfolioData';
import { Headphones, Wifi, Laptop, FileText, Briefcase, GraduationCap, Award, Wrench, CheckCircle2 } from 'lucide-react';

export function ExperienceSkills() {
  const { skillCategories, experience, education, certifications, tools } = portfolioData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Headphones': return <Headphones className="w-5 h-5 text-blue-600" />;
      case 'Wifi': return <Wifi className="w-5 h-5 text-blue-600" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-blue-600" />;
      default: return <FileText className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="experience" className="py-24 bg-[#faf9f6] border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div data-reveal className="max-w-3xl mb-16">
          <div className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">
            Competencies & Career Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Experience & Practical Skills
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Every skill is backed by hands-on experience and real tasks I can discuss in technical interviews.
          </p>
        </div>

        {/* Skills Grid */}
        <div id="skills" className="mb-24">
          <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            Core Technical Skills & Interview-Ready Tasks
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((cat, idx) => (
              <div 
                key={idx}
                data-reveal
                className="bg-white border border-slate-200/80 rounded-xl p-8 shadow-2xs hover:border-slate-300 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-blue-50 border border-blue-200/60 rounded-lg">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{cat.title}</h4>
                    <p className="text-xs text-slate-500">{cat.description}</p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="bg-[#faf9f6] p-3.5 rounded-lg border border-slate-200/60">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-slate-900">{skill.name}</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-sm">Interview Topic</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        <strong className="text-slate-700">Interview Task:</strong> {skill.interviewTask}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-24">
          <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            Professional Experience
          </h3>

          <div className="space-y-8">
            {experience.map(exp => (
              <div 
                key={exp.id}
                data-reveal
                className="bg-white border border-slate-200/80 rounded-xl p-8 shadow-2xs relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                    <p className="text-sm font-medium text-blue-600">{exp.company} &bull; {exp.location}</p>
                  </div>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-md self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Responsibilities & Achievements</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="text-sm text-slate-700 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {exp.skillsUsed.map(s => (
                    <span key={s} className="text-xs bg-slate-50 text-slate-600 px-2.5 py-1 rounded-sm border border-slate-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education, Certifications & Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div data-reveal className="bg-white border border-slate-200/80 rounded-xl p-8 shadow-2xs">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{edu.degree}</h4>
                  <p className="text-xs text-blue-600 font-medium mb-1">{edu.institution} &bull; {edu.location}</p>
                  <span className="text-[11px] text-slate-400 block mb-2">{edu.period}</span>
                  {edu.notes && <p className="text-xs text-slate-600">{edu.notes}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div data-reveal className="bg-white border border-slate-200/80 rounded-xl p-8 shadow-2xs">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{cert.name}</h4>
                  <p className="text-xs text-slate-600 font-medium mb-1">{cert.issuer}</p>
                  <span className="text-[11px] text-slate-400 block">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Environments */}
          <div data-reveal className="bg-white border border-slate-200/80 rounded-xl p-8 shadow-2xs">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-blue-600" />
              Tools & Environments
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, idx) => (
                <span 
                  key={idx}
                  className="text-xs bg-[#faf9f6] text-slate-700 px-3 py-1.5 rounded-md border border-slate-200/80 font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
