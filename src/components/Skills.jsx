import React from 'react';

const skillCategories = [
  {
    icon: 'code',
    iconColor: 'text-secondary',
    accentBorder: 'hover:border-secondary/40',
    title: 'Front End Languages & Tools',
    description: 'Client interfaces, structured layout engines, and dynamic scripting.',
    skills: [
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Bootstrap 5',
      'Web design',
      'Responsive Web Design',
      'DOM Manipulation',
    ],
  },
  {
    icon: 'database',
    iconColor: 'text-primary',
    accentBorder: 'hover:border-primary/40',
    title: 'Programming & Databases',
    description: 'Object-oriented backends, schema design, and query optimizations.',
    skills: [
      'Python',
      'OOP',
      'PostgreSQL',
      'SQLite',
      'Relational Modeling (ERD)',
    ],
  },
  {
    icon: 'terminal',
    iconColor: 'text-tertiary',
    accentBorder: 'hover:border-tertiary/40',
    title: 'Systems & Version Control',
    description: 'Source control, operating systems, and networking fundamentals.',
    skills: [
      'Git',
      'GitHub',
      'Linux',
      'Bash',
      'Cisco Packet Tracer',
      'Computer Science fundamentals',
    ],
  },
];

export default function Skills() {
  return (
    <section className="w-full max-w-7xl mx-auto px-margin py-20 scroll-mt-24" id="skills">
      <div className="flex flex-col gap-space-xs mb-space-lg">
        <span className="font-code text-xs font-semibold uppercase text-secondary tracking-widest">
          Capabilities &amp; Tooling
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
          Technical Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className={`p-space-lg rounded-2xl bg-surface-container shadow-lg border border-outline-variant/20 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${cat.accentBorder} group`}
          >
            <div>
              <div className={`w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center ${cat.iconColor} mb-space-md transition-transform duration-300 group-hover:scale-105 group-hover:bg-surface-bright`}>
                <span className="material-symbols-outlined text-[28px]">{cat.icon}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-on-surface mb-space-xs">
                {cat.title}
              </h3>
              <p className="text-sm text-on-surface-variant mb-space-md leading-normal">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded bg-surface-container-low text-on-surface font-code text-xs border border-outline-variant/10 transition-all duration-200 hover:border-secondary/40 hover:bg-surface-container hover:text-secondary cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}