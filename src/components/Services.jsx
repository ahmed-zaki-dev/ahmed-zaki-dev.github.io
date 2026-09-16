import React from 'react';

const services = [
  {
    icon: 'laptop_chromebook',
    color: 'text-secondary',
    title: 'Custom Front-End Development',
    description: 'Modern, scalable architectures built with clean semantic code, strict standards, and responsive foundations.',
    tag: 'ES6+ / Components ->',
  },
  {
    icon: 'terminal',
    color: 'text-primary',
    title: 'Python Web Development',
    description: 'Backend logic, command-line tooling, relational database connections, and structured unit test suites.',
    tag: 'OOP / Pytest ->',
  },
  {
    icon: 'devices',
    color: 'text-tertiary',
    title: 'Responsive Web Design',
    description: '100% fluid layouts tailored for 4K desktop screens, tablets, and ultra-compact mobile form factors.',
    tag: 'CSS Grid / Flex ->',
  },
  {
    icon: 'design_services',
    color: 'text-secondary',
    title: 'UI/UX Implementation',
    description: 'Converting high-fidelity design prototypes into dynamic DOM nodes with micro-interactions and transitions.',
    tag: 'DOM / Events ->',
  },
  {
    icon: 'bolt',
    color: 'text-primary',
    title: 'Web Optimization',
    description: 'Refactoring legacy codebases, minifying payload overhead, and optimizing core render speed metrics.',
    tag: '+25% Render Speed ->',
  },
];

export default function Services() {
  return (
    <section className="w-full max-w-7xl mx-auto px-margin py-20 scroll-mt-24" id="services">
      <div className="flex flex-col gap-space-xs mb-space-lg">
        <span className="font-code text-xs font-semibold uppercase text-secondary tracking-widest">
          Solutions &amp; Deliverables
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
          Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 hover:-translate-y-1 border border-outline-variant/20 hover:border-outline-variant/40 flex flex-col justify-between group"
          >
            <div>
              <div className={`w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center ${srv.color} mb-space-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-surface-bright`}>
                <span className="material-symbols-outlined text-[22px]">{srv.icon}</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-on-surface mb-1 leading-snug">
                {srv.title}
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-space-sm">
                {srv.description}
              </p>
            </div>
            <span className={`font-code text-xs ${srv.color} pt-2 font-medium border-t border-outline-variant/10 transition-transform duration-200 group-hover:translate-x-1 inline-block`}>
              {srv.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}