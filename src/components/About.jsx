import React from 'react';

export default function About() {
  return (
    <section className="w-full max-w-7xl mx-auto px-margin py-20 scroll-mt-24" id="about">
      {/* Section Header */}
      <div className="flex flex-col gap-space-md mb-space-lg">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary text-[22px]">account_tree</span>
          <span className="font-code text-xs font-semibold uppercase text-secondary tracking-widest">
            Background &amp; Philosophy
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
          About Me
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        
        {/* Main Narrative Card with Subtle Hover */}
        <div className="lg:col-span-7 bg-surface-container p-space-lg rounded-xl shadow-md border border-outline-variant/20 transition-all duration-300 hover:border-outline-variant/40 hover:shadow-lg">
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed mb-space-md">
            Front End Developer with a Computer Engineering and Control Systems academic background at Mansoura University. Focused on building responsive client interfaces and modern web architectures. Proficient in HTML5, CSS3, JavaScript (ES6+), and Bootstrap 5, with strong foundations in Python and backend fundamentals. Experienced in DOM manipulation, component-driven UI design, and cross-platform optimization to deliver clean, maintainable web applications.
          </p>
          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
            <span className="px-3 py-1 rounded bg-surface-container-high text-primary font-code text-xs transition-colors duration-200 hover:bg-surface-bright cursor-default">
              Mansoura, Egypt
            </span>
            <span className="px-3 py-1 rounded bg-surface-container-high text-secondary font-code text-xs transition-colors duration-200 hover:bg-surface-bright cursor-default">
              Control Systems Spec
            </span>
            <span className="px-3 py-1 rounded bg-surface-container-high text-tertiary font-code text-xs transition-colors duration-200 hover:bg-surface-bright cursor-default">
              Client Interface Design
            </span>
          </div>
        </div>

        {/* Highlight Pillars with Micro Lift */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-space-md">
          <div className="p-space-md rounded-xl bg-surface-container-high border border-outline-variant/20 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-md hover:shadow-secondary/5 group">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="material-symbols-outlined text-secondary text-[26px] transition-transform duration-300 group-hover:scale-110">
                memory
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-on-surface">
                Computer Engineering Core
              </h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-normal">
              Rigorous grounding in control loops, algorithmic problem solving, logic synthesis, and hardware-software architectural parity.
            </p>
          </div>

          <div className="p-space-md rounded-xl bg-surface-container-high border border-outline-variant/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 group">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="material-symbols-outlined text-primary text-[26px] transition-transform duration-300 group-hover:scale-110">
                dashboard_customize
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-on-surface">
                Component-Driven UI
              </h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-normal">
              Translating interface specifications into clean, modular CSS/JS components prioritizing strict cross-device visual parity.
            </p>
          </div>

          <div className="p-space-md rounded-xl bg-surface-container-high border border-outline-variant/20 transition-all duration-300 hover:-translate-y-1 hover:border-tertiary/40 hover:shadow-md hover:shadow-tertiary/5 group">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="material-symbols-outlined text-tertiary text-[26px] transition-transform duration-300 group-hover:scale-110">
                speed
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-on-surface">
                Performance &amp; Optimization
              </h3>
            </div>
            <p className="text-sm text-on-surface-variant leading-normal">
              Systematic profiling yielding 25% acceleration in render throughput, low cumulative layout shift, and robust event loops.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}