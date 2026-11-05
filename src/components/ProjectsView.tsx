import React from 'react';
import { Project } from '../types';

interface ProjectsViewProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ projects, onSelectProject }) => {
  // Split projects into two columns (left and right) for the masonry-style offset layout
  const leftColumnProjects = projects.filter((_, idx) => idx % 2 === 0);
  const rightColumnProjects = projects.filter((_, idx) => idx % 2 === 1);

  const renderProjectCard = (project: Project, badgePosition: 'top-left' | 'bottom-left') => (
    <div
      key={project.id}
      onClick={() => onSelectProject(project)}
      className="group cursor-pointer mb-12 sm:mb-16 relative"
    >
      <div className="relative overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-sm transition-all duration-300 group-hover:shadow-md">
        
        {/* Engaging Media Box */}
        <div className="w-full aspect-[4/3] sm:aspect-[16/11] bg-neutral-900 overflow-hidden flex items-center justify-center">
          <img
            src={project.coverImage}
            alt={project.title}
            className={`w-full h-full ${
              project.id === 'otterus2d' ? 'object-contain p-6' : 'object-cover'
            } group-hover:scale-105 transition-transform duration-500`}
          />
        </div>

        {/* Signature Davis Ryan Offset Badge (matching Images 1 & 2) */}
        <div
          className={`absolute z-10 px-6 py-4 bg-[#E5E5DF] text-neutral-900 shadow-sm transition-transform duration-300 group-hover:bg-[#DCDCD5] ${
            badgePosition === 'top-left'
              ? 'top-4 left-4 sm:top-6 sm:left-6'
              : 'bottom-4 left-4 sm:bottom-6 sm:left-6'
          }`}
        >
          <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-neutral-900">
            {project.badgeLabel || project.title}
          </h2>
          <p className="text-xs text-neutral-600 font-mono mt-0.5 uppercase tracking-wider hidden sm:block">
            {project.categoryLabel}
          </p>
        </div>

      </div>
    </div>
  );

  return (
    <div className="w-full bg-white min-h-screen py-10 sm:py-16 animate-in fade-in duration-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Page Title (Davis Ryan style: bold, centered with period) */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-neutral-900 tracking-tight">
            Projects.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-xl mx-auto">
            Low-latency electronic trading engines, custom memory allocators, AWS cloud backends, and data-oriented runtimes.
          </p>
        </div>

        {/* 2-Column Offset Gallery Grid (matching Images 1 & 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
          
          {/* Left Column */}
          <div>
            {leftColumnProjects.map((project, idx) =>
              renderProjectCard(project, idx === 0 ? 'top-left' : 'bottom-left')
            )}
          </div>

          {/* Right Column (Offset top margin on desktop for organic masonry feel) */}
          <div className="md:pt-16">
            {rightColumnProjects.map((project) =>
              renderProjectCard(project, 'bottom-left')
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
