import React from 'react';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden scroll-mt-24" id="portfolio">
      {/* Subtle Ambient Glow Orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-150 h-150 bg-primary/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-[35%] -right-40 w-137.5 h-137.5 bg-secondary/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-[70%] -left-25 w-125 h-125 bg-tertiary-container/10 rounded-full blur-[130px]" />

      <div className="w-full max-w-7xl mx-auto px-margin pt-12 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          
          {/* Left Column: Hero Information */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Badges with Soft Hover Elevation */}
            <div className="flex flex-wrap items-center gap-space-sm">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-secondary font-code text-xs border border-secondary/20 transition-all duration-300 hover:border-secondary/60 hover:bg-surface-bright cursor-default">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Mansoura University
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary font-code text-xs border border-primary/20 transition-all duration-300 hover:border-primary/60 hover:bg-surface-bright cursor-default">
                <span className="material-symbols-outlined text-[14px]">terminal</span>
                Front End Specialist
              </span>
            </div>

            {/* Titles */}
            <div className="flex flex-col gap-1.5">
              <p className="font-code text-secondary tracking-wide text-sm sm:text-base">
                const role = "Engineer";
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-on-surface leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-tertiary to-secondary">
                  Ahmed Mohamed
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-primary-fixed-dim">
                Front End Developer &amp; Computer Engineering Student
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Building responsive client interfaces and modern web architectures. Focused on clean,
              maintainable code and seamless user experiences.
            </p>

            {/* Interactive Minimalist CTA Buttons */}
            <div className="flex flex-wrap items-center gap-space-md pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary-container text-on-primary font-code text-sm font-semibold shadow-md shadow-primary-container/20 hover:shadow-lg hover:shadow-primary-container/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[20px]">dataset</span>
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-surface-container-high text-on-surface font-code text-sm border border-outline-variant/40 hover:border-secondary/60 hover:bg-surface-bright hover:text-secondary hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Contact Me
              </a>
            </div>

            {/* Micro Quick Stats Bar with Subtle Lift */}
            <div className="grid grid-cols-3 gap-space-md pt-3">
              <div className="p-4 sm:p-5 text-center rounded-xl bg-surface-container-low border border-outline-variant/15 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5 group">
                <div className="text-2xl sm:text-3xl font-extrabold text-secondary font-body transition-transform duration-300 group-hover:scale-105">2028</div>
                <div className="font-code text-xs text-on-surface-variant mt-1">Expected B.Sc.</div>
              </div>
              <div className="p-4 sm:p-5 text-center rounded-xl bg-surface-container-low border border-outline-variant/15 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 group">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary font-body transition-transform duration-300 group-hover:scale-105">150+</div>
                <div className="font-code text-xs text-on-surface-variant mt-1">Algorithmic Tasks</div>
              </div>
              <div className="p-4 sm:p-5 text-center rounded-xl bg-surface-container-low border border-outline-variant/15 transition-all duration-300 hover:-translate-y-1 hover:border-tertiary/40 hover:shadow-lg hover:shadow-tertiary/5 group">
                <div className="text-2xl sm:text-3xl font-extrabold text-tertiary font-body transition-transform duration-300 group-hover:scale-105">100%</div>
                <div className="font-code text-xs text-on-surface-variant mt-1">Cross-Device Consistency</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative flex flex-col items-center justify-center w-full max-w-105 group">
              
              {/* Card Ambient Glow (Gently intensifies on hover) */}
              <div className="absolute -inset-2 rounded-2xl bg-linear-to-tr from-primary via-tertiary-container to-secondary opacity-30 blur-xl pointer-events-none transition-opacity duration-500 group-hover:opacity-50" />
              
              {/* Outer Border Layer */}
              <div className="relative w-full rounded-2xl p-[1.5px] bg-linear-to-b from-secondary/40 via-primary/30 to-outline-variant/30 shadow-2xl overflow-hidden transition-colors duration-500 group-hover:from-secondary/60 group-hover:via-primary/50">
                <div className="relative w-full rounded-2xl bg-surface-container-lowest overflow-hidden flex flex-col items-center">
                  
                  {/* Image Frame with Smooth Micro Zoom */}
                  <div className="relative w-full aspect-4/5 overflow-hidden rounded-2xl">
                    <img
                      src={profileImg}
                      alt="Ahmed Mohamed - Front End Developer"
                      className="w-full h-full object-cover object-[50%_20%] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent pointer-events-none" />
                    
                    {/* Floating Info Overlay */}
                    <div className="absolute bottom-4 inset-x-4 flex flex-col gap-2 z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high/90 backdrop-blur-md border border-outline-variant/40 shadow-md">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                          </span>
                          <span className="font-code text-xs text-on-surface font-medium">
                            Available for Opportunities
                          </span>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-primary-container/20 border border-primary/30 backdrop-blur-md text-primary font-code text-xs font-semibold">
                          CE &amp; Front End
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}