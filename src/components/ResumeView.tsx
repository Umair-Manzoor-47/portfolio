import React from 'react';
import { EXPERIENCES_DATA, EDUCATION_DATA, SKILL_CATEGORIES } from '../data/projectsData';
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download } from 'lucide-react';

interface ResumeViewProps {
  onBack: () => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({ onBack }) => {
  return (
    <div className="w-full bg-white min-h-screen py-10 animate-in fade-in duration-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* Top Back Navigation & PDF Download Bar */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-neutral-200">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <a
            href="./Umair_Manzoor_Resume.pdf"
            download="Umair_Manzoor_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1D2B44] hover:bg-[#152033] text-white text-xs font-bold tracking-widest uppercase transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Resume Header */}
        <div className="text-center pb-8 border-b border-neutral-200">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            UMAIR MANZOOR
          </h1>
          <p className="text-lg font-semibold text-neutral-700 mt-1">
            Software Engineer
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-600">
            <a href="mailto:umairmanzoor546@gmail.com" className="hover:text-black flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>umairmanzoor546@gmail.com</span>
            </a>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>+92 304 8849668</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Lahore, Pakistan</span>
            </span>
          </div>

          <div className="mt-2 flex items-center justify-center gap-6 text-xs sm:text-sm text-neutral-600">
            <a
              href="https://github.com/Umair-Manzoor-47"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black underline flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/Umair-Manzoor-47</span>
            </a>
            <a
              href="https://www.linkedin.com/in/umair-manzoor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black underline flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>linkedin.com/in/umair-manzoor</span>
            </a>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed text-center font-normal">
            Software Engineer with 2+ years building production systems in C#, C++, and Dart, spanning real-time architecture, performance optimization, and cross-platform delivery. Track record shipping software used by 100K+ users and studio titles with 50M+ downloads.
          </p>
        </div>

        {/* Section: Professional Experience */}
        <div className="py-8 border-b border-neutral-200">
          <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-6">
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="space-y-8">
            {EXPERIENCES_DATA.map((exp, idx) => (
              <div key={idx}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <div className="text-base font-bold text-neutral-900">
                    {exp.role} —{' '}
                    {exp.companyUrl ? (
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-950 inline-flex items-center gap-0.5">
                        {exp.company}
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    ) : (
                      exp.company
                    )}
                  </div>
                  <div className="text-xs font-mono text-neutral-500">
                    {exp.period} | {exp.location}
                  </div>
                </div>

                <ul className="mt-2.5 space-y-1.5 list-disc list-inside text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Education */}
        <div className="py-8 border-b border-neutral-200">
          <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-6">
            EDUCATION
          </h2>

          <div className="space-y-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <div className="text-base font-bold text-neutral-900">
                    {edu.degree}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-600">
                    {edu.institutionUrl ? (
                      <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {edu.institution}
                      </a>
                    ) : (
                      edu.institution
                    )}
                  </div>
                </div>
                <div className="text-xs font-mono text-neutral-500">
                  {edu.period} | {edu.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Skills */}
        <div className="pt-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-4">
            SKILLS &amp; TECHNOLOGIES
          </h2>

          <div className="space-y-2 text-xs sm:text-sm text-neutral-700">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <span className="font-bold text-neutral-900 w-44 shrink-0">{cat.category}:</span>
                <span className="text-neutral-700">{cat.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
