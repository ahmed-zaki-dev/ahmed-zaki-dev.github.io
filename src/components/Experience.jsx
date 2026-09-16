import React from 'react';

const experiences = [
  {
    org: 'DIGITAL EGYPT PIONEERS INITIATIVE (DEPI)',
    location: 'Mansoura, Egypt',
    role: 'Front End Web Development Intern',
    period: 'Jun 2026 – Present',
    responsibilities: [
      'Built 4 responsive websites using HTML5, CSS3, and JavaScript that load faster by 25%.',
      'Worked with the team in 6 Agile sprints to turn design wireframes into working web pages.',
      'Created interactive page features and animations using JavaScript DOM manipulation across 12 layouts.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Agile Sprints'],
  },
  {
    org: 'INFORMATION TECHNOLOGY INSTITUTE (ITI)',
    location: 'Mansoura, Egypt',
    role: 'Web Development Using Python Trainee',
    period: 'Jul 2026 – Aug 2026',
    responsibilities: [
      'Built full-stack web applications using Python, Django, and PostgreSQL databases.',
      'Designed responsive web pages using clean HTML, CSS, and modern JavaScript.',
      'Applied Object-Oriented Programming (OOP) concepts to write clean and organized backend code.',
    ],
    tags: ['Python', 'OOP', 'Django', 'PostgreSQL', 'HTML/CSS', 'JavaScript'],
  },
];

export default function Experience() {
  return (
    <section className="w-full max-w-7xl mx-auto px-margin py-20 scroll-mt-24" id="experience">
      <div className="flex flex-col gap-space-xs mb-space-lg">
        <span className="font-code text-xs font-semibold uppercase text-secondary tracking-widest">
          Industry &amp; Practical Training
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
          Professional Experience &amp; Internships
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
        {experiences.map((item, idx) => (
          <div
            key={idx}
            className="p-space-lg rounded-xl bg-surface-container shadow-md border border-outline-variant/20 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-outline-variant/40 hover:shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between gap-space-xs mb-space-xs">
                <span className="font-code text-xs text-secondary font-bold">
                  {item.org}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-primary font-code text-xs transition-colors duration-200 group-hover:bg-surface-bright">
                  {item.location}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-on-surface">
                {item.role}
              </h3>
              <p className="font-code text-xs text-outline mb-space-md mt-1">
                {item.period}
              </p>
              <ul className="space-y-space-sm text-sm sm:text-base text-on-surface-variant">
                {item.responsibilities.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 group/item">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:scale-120">
                      check_circle
                    </span>
                    <span className="group-hover/item:text-on-surface transition-colors duration-200">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-space-md mt-4 border-t border-outline-variant/10">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface-variant font-code text-xs border border-outline-variant/10 transition-colors duration-200 hover:border-secondary/30 hover:text-on-surface cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}