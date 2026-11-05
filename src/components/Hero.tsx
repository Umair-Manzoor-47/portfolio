import React from 'react';

interface HeroProps {
  onNavigateToProjects: () => void;
  onNavigateToResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToProjects, onNavigateToResume }) => {
  return (
    <section className="w-full bg-white pt-10 pb-16 sm:pt-14 sm:pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Main 2-Column Grid matching Davis Ryan exact layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Column: Big Rounded Portrait (Davis Ryan 48px rounded) */}
          <div className="w-full lg:w-[44%] shrink-0">
            <div className="w-full aspect-[4/5] max-w-[460px] mx-auto rounded-[48px] overflow-hidden shadow-sm bg-neutral-100 border border-neutral-200/60">
              <img
                src="./profile.jpg"
                alt="Umair Manzoor"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column: Headline, Bio, and 3 Systems Engineering Schematics (Guaranteed Zero Overlap) */}
          <div className="w-full lg:w-[56%] flex flex-col items-center text-center">
            
            {/* Headline Block with Cache/CPU Diagram to the Right (Zero Overlap Guaranteed via left-full ml-6) */}
            <div className="relative inline-flex flex-col items-center">
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-neutral-900 tracking-tight leading-[1.1] max-w-sm sm:max-w-md">
                I’m Umair Manzoor,<br />
                a Systems &amp; Backend<br />
                Engineer.
              </h1>

              {/* Cache / CPU Blueprint: Positioned strictly 24px past the right edge of the text, never overlapping */}
              <div className="hidden xl:block absolute left-full top-2 ml-4 lg:ml-6 w-32 lg:w-40 h-auto shrink-0 pointer-events-none opacity-85 select-none">
                <img
                  src="./media/hero/cache_cpu_blueprint.svg"
                  alt="CPU & Cache Hierarchy Blueprint"
                  className="w-full h-auto drop-shadow-sm"
                />
              </div>
            </div>

            {/* Passionate & Concise Intro Paragraph */}
            <p className="mt-6 text-sm sm:text-base text-neutral-700 leading-relaxed max-w-lg font-normal">
              Obsessed with mechanical sympathy, zero-allocation memory architectures, and sub-microsecond determinism. When I'm not optimizing AWS cloud backends and production systems serving 50M+ users at <a href="https://geniteam.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-neutral-900 underline hover:text-blue-900">GenITeam</a>, I engineer low-latency matching engines, custom memory allocators, and data-oriented runtimes in C++20.
            </p>

            {/* Subtext Prompt */}
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-lg">
              Scroll below to see how I build high-performance systems from the cacheline up!
            </p>

            {/* Non-overlapping 3-Column Systems Engineering Row: RAM Blueprint | 3 Buttons | Ring Buffer */}
            <div className="mt-8 w-full flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              
              {/* Left Systems Schematic: RAM Blueprint */}
              <div className="hidden sm:block w-36 sm:w-44 lg:w-48 shrink-0 opacity-85 select-none pointer-events-none">
                <img
                  src="./media/hero/ram_blueprint.svg"
                  alt="RAM Module DDR5 Blueprint"
                  className="w-full h-auto drop-shadow-sm"
                />
              </div>

              {/* Center: 3 Dark Navy Buttons */}
              <div className="w-56 shrink-0 flex flex-col gap-3 z-10">
                <a
                  href="https://www.linkedin.com/in/umair-manzoor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#1D2B44] hover:bg-[#152033] text-white text-xs font-bold tracking-widest uppercase transition-colors text-center shadow-sm"
                >
                  LinkedIn
                </a>

                <button
                  onClick={onNavigateToProjects}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#1D2B44] hover:bg-[#152033] text-white text-xs font-bold tracking-widest uppercase transition-colors text-center shadow-sm"
                >
                  Projects
                </button>

                <button
                  onClick={onNavigateToResume}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#1D2B44] hover:bg-[#152033] text-white text-xs font-bold tracking-widest uppercase transition-colors text-center shadow-sm"
                >
                  Resume
                </button>
              </div>

              {/* Right Systems Schematic: A Ring buffer (Minimalistic) */}
              <div className="hidden sm:block w-36 sm:w-44 lg:w-48 shrink-0 opacity-85 select-none pointer-events-none">
                <img
                  src="./media/hero/ring_buffer_minimal.svg"
                  alt="Minimalistic SPSC Ring Buffer Schematic"
                  className="w-full h-auto drop-shadow-sm"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
