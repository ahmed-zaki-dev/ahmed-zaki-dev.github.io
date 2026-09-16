import React from 'react';

const disciplines = [
  {
    code: 'Discipline 01',
    title: 'Control Systems',
    description: 'Feedback loops, PID logic & state space models',
  },
  {
    code: 'Discipline 02',
    title: 'Data Structures',
    description: 'Trees, Hash Maps, Graphs & Heap management',
  },
  {
    code: 'Discipline 03',
    title: 'Algorithms',
    description: 'Asymptotic analysis, DP & optimization trees',
  },
  {
    code: 'Discipline 04',
    title: 'Software Engineering',
    description: 'SDLC, architectural modularity & clean design',
  },
];

export default function Education() {
  return (
    <section className="w-full max-w-7xl mx-auto px-margin py-20 scroll-mt-24" id="education">
      {/* Section Header */}
      <div className="flex flex-col gap-space-xs mb-space-lg">
        <span className="font-code text-xs font-semibold uppercase text-secondary tracking-widest">
          Academic Rigor
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
          Education
        </h2>
      </div>

      {/* Main Education Box */}
      <div className="p-6 sm:p-10 rounded-2xl bg-surface-container shadow-xl relative overflow-hidden border border-outline-variant/20 transition-all duration-300 hover:border-outline-variant/40">
        
        {/* Header Information */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-space-md mb-space-lg pb-space-md border-b border-outline-variant/20">
          <div className="flex items-start gap-space-md group">
            <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:bg-surface-bright">
              <span className="material-symbols-outlined text-[32px]">school</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-on-surface">
                Faculty of Engineering, Mansoura University – Mansoura, Egypt
              </h3>
              <p className="text-base sm:text-lg text-secondary font-medium">
                B.Sc. in Computer Engineering and Control Systems
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-code text-xs font-semibold border border-secondary/20 transition-all duration-200 hover:border-secondary/40">
              Cumulative Grade: Excellent
            </span>
            <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-primary font-code text-xs border border-outline-variant/30 transition-all duration-200 hover:border-primary/40">
              Expected Graduation: 2028
            </span>
          </div>
        </div>

        {/* 4 Core Academic Disciplines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-space-md">
          {disciplines.map((item) => (
            <div
              key={item.code}
              className="p-space-md rounded-lg bg-surface-container-low border border-outline-variant/10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:bg-surface-container"
            >
              <div>
                <div className="font-code text-xs text-outline mb-1">{item.code}</div>
                <div className="text-lg font-semibold text-on-surface">{item.title}</div>
              </div>
              <p className="text-sm text-on-surface-variant mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}