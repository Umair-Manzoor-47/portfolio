import React, { useRef, useEffect, useCallback } from 'react';
import { Project } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCarouselProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, onSelectProject }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isAdjustingRef = useRef(false);

  // Repeat projects 3 times: [Set 0 (clone), Set 1 (main), Set 2 (clone)]
  const loopedProjects = [
    ...projects.map((p) => ({ ...p, uniqueKey: `${p.id}-s0` })),
    ...projects.map((p) => ({ ...p, uniqueKey: `${p.id}-s1` })),
    ...projects.map((p) => ({ ...p, uniqueKey: `${p.id}-s2` }))
  ];

  // Helper to calculate exact step width between cards
  const getCardStep = useCallback(() => {
    if (!scrollContainerRef.current) return 412;
    const cards = scrollContainerRef.current.children;
    if (cards.length >= 2) {
      const card1 = cards[0] as HTMLElement;
      const card2 = cards[1] as HTMLElement;
      const step = card2.offsetLeft - card1.offsetLeft;
      if (step > 0) return step;
    }
    return 412;
  }, []);

  // Helper to get total width of one complete set of projects
  const getOneSetWidth = useCallback(() => {
    return projects.length * getCardStep();
  }, [projects.length, getCardStep]);

  // On mount, position the scroll cleanly at Set 1 (instant, no smooth scroll animation)
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Use requestAnimationFrame to ensure layout has computed element widths
    const timer = setTimeout(() => {
      const oneSet = getOneSetWidth();
      el.scrollLeft = oneSet;
    }, 50);

    return () => clearTimeout(timer);
  }, [getOneSetWidth]);

  // Handle seamless infinite looping without jitter
  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el || isAdjustingRef.current) return;

    const oneSet = getOneSetWidth();
    if (oneSet <= 0) return;

    // Scrolled past Set 1 into Set 2: jump back to Set 1 seamlessly
    if (el.scrollLeft >= oneSet * 2 - 10) {
      isAdjustingRef.current = true;
      el.scrollLeft -= oneSet;
      // Allow next check on next frame
      requestAnimationFrame(() => {
        isAdjustingRef.current = false;
      });
    }
    // Scrolled before Set 1 into Set 0: jump forward to Set 1 seamlessly
    else if (el.scrollLeft <= 10) {
      isAdjustingRef.current = true;
      el.scrollLeft += oneSet;
      requestAnimationFrame(() => {
        isAdjustingRef.current = false;
      });
    }
  };

  // Button scroll handlers with smooth animation
  const scrollByDirection = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const step = getCardStep();
    el.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth'
    });
  };

  return (
    <section id="projects" className="w-full bg-white py-12 sm:py-20 border-t border-neutral-100 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative">
        
        {/* Left Arrow Button (Davis Ryan dark circular style) */}
        <button
          onClick={() => scrollByDirection('left')}
          className="absolute left-2 sm:left-4 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1D2B44]/90 hover:bg-[#152033] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow Button (Davis Ryan dark circular style) */}
        <button
          onClick={() => scrollByDirection('right')}
          className="absolute right-2 sm:right-4 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1D2B44]/90 hover:bg-[#152033] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Horizontal Infinite Scrollable Row (NO scroll-smooth class here so wrap jumps are 0ms instant) */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar px-6 py-4 select-none"
        >
          {loopedProjects.map((project) => (
            <div
              key={project.uniqueKey}
              className="w-[320px] sm:w-[380px] shrink-0 flex flex-col justify-between group"
            >
              {/* Image Preview Box (Uses mascot with contain/padding for Otterus, cover for others) */}
              <div 
                onClick={() => onSelectProject(project)}
                className="w-full h-56 sm:h-64 bg-neutral-900 border border-neutral-200 overflow-hidden cursor-pointer flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow"
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className={`w-full h-full ${
                    project.id === 'otterus2d'
                      ? 'object-contain p-5'
                      : 'object-cover'
                  } group-hover:scale-105 transition-transform duration-500`}
                />
              </div>

              {/* Title & Learn More Button */}
              <div className="mt-4 flex flex-col items-center text-center">
                <h3 
                  onClick={() => onSelectProject(project)}
                  className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight cursor-pointer hover:text-blue-950 transition-colors"
                >
                  {project.title}.
                </h3>

                <button
                  onClick={() => onSelectProject(project)}
                  className="mt-3.5 px-7 py-2 rounded-lg bg-[#1D2B44] hover:bg-[#152033] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-sm"
                >
                  Learn More
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
