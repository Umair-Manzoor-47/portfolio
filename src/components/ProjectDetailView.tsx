import React from 'react';
import { Project } from '../types';
import { ArrowLeft, Github, ExternalLink, Play, CheckCircle2 } from 'lucide-react';

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, onBack }) => {
  const heroImage = project.bannerImage || project.coverImage;

  return (
    <div className="w-full bg-white min-h-screen pb-24 animate-in fade-in duration-200">
      
      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </button>

        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          {project.categoryLabel}
        </span>
      </div>

      {/* Hero Banner: Text anchored to the bottom-left as requested */}
      <div className="w-full bg-[#0A0F1D] relative min-h-[320px] sm:min-h-[440px] flex items-end overflow-hidden">
        {/* Background Artwork */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-65"
          />
          {/* Bottom vignette to ensure crisp text contrast at bottom-left */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/50 to-transparent" />
        </div>

        {/* Hero Title & Subtext Overlay anchored strictly to the bottom-left */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pb-8 sm:pb-12 pt-32 sm:pt-44 text-white w-full text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {project.title}
          </h1>
          <p className="mt-2.5 text-xs sm:text-sm lg:text-base text-neutral-300 font-mono tracking-wide max-w-4xl">
            {project.metrics.map(m => `${m.label}: ${m.value}`).join(' | ')} |
          </p>
        </div>
      </div>

      {/* 3 Pillars Section (Davis Ryan style from Images 3 & 4) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-14 pb-12 border-b border-neutral-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {project.pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col">
              
              {/* Pillar Visual */}
              <div className="w-full aspect-[4/3] bg-neutral-900 overflow-hidden border border-neutral-200/80 shadow-sm flex items-center justify-center">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Pillar Title with Period */}
              <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                {pillar.title}
              </h2>

              {/* Pillar Narrative */}
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed font-normal">
                {pillar.text}
              </p>

            </div>
          ))}
        </div>
      </div>

      {/* Architecture Deep Dive & Key Decisions */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 pt-12 space-y-12">
        
        {/* Overview Box */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            System Overview.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            {project.deepDive.overview}
          </p>
        </div>

        {/* Architecture Blueprint Diagram */}
        {project.architectureDiagram && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-neutral-900">
                Architecture Blueprint.
              </h2>
              <a
                href={project.architectureDiagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
                title="View full vector diagram"
              >
                <span>Full Vector View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-3 sm:p-5 shadow-sm overflow-hidden">
              <div className="w-full bg-white rounded-xl border border-neutral-200/80 p-2 sm:p-4 flex items-center justify-center">
                <img
                  src={project.architectureDiagram}
                  alt={`${project.title} Architecture Blueprint`}
                  className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                  loading="eager"
                />
              </div>
              {project.architectureCaption && (
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 font-mono text-center">
                  {project.architectureCaption}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Key Engineering Decisions */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">
            Architecture &amp; Technical Decisions.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.deepDive.keyArchitecture.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/60 shadow-sm">
                <h4 className="text-base font-bold text-neutral-900 mb-1.5">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Implementation Details */}
        {project.deepDive.technicalTakeaways.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Implementation Details.
            </h2>
            <div className="space-y-3">
              {project.deepDive.technicalTakeaways.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Links */}
        <div className="pt-8 border-t border-neutral-200 flex flex-wrap items-center gap-4">
          {project.externalLinks.github && (
            <a
              href={project.externalLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1D2B44] hover:bg-[#152033] text-white text-xs font-bold tracking-widest uppercase transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}

          {project.externalLinks.steam && (
            <a
              href={project.externalLinks.steam}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1D2B44] hover:bg-[#152033] text-white text-xs font-bold tracking-widest uppercase transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View on Steam</span>
            </a>
          )}

          {project.externalLinks.playStore && (
            <a
              href={project.externalLinks.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1D2B44] hover:bg-[#152033] text-white text-xs font-bold tracking-widest uppercase transition-colors shadow-sm"
            >
              <Play className="w-4 h-4" />
              <span>Google Play Store</span>
            </a>
          )}

          <button
            onClick={onBack}
            className="ml-auto px-6 py-3 rounded-lg border border-neutral-300 text-neutral-700 hover:text-black hover:border-black text-xs font-bold tracking-widest uppercase transition-colors"
          >
            Back to Projects
          </button>
        </div>

      </div>

    </div>
  );
};
