import React from 'react';

const activities = [
  {
    icon: 'psychology',
    accentColor: 'secondary',
    period: '2025 – 2026',
    title: 'ICPC Mansoura Community',
    subtitle: 'Mansoura University • Competitive Programming Trainee',
    description:
      'Solved 150+ algorithmic challenges focusing on graph theory, dynamic programming, and computational complexity. Collaborated with team members to analyze problem edge cases and optimize code execution performance.',
    badge: 'Graph Theory • DP • Asymptotics',
  },
  {
    icon: 'developer_board',
    accentColor: 'primary',
    period: '2025 – 2026',
    title: 'Embedded Systems and Arduino Team',
    subtitle: 'Mansoura University • Hardware Interface Member',
    description:
      'Coordinated hardware component wiring and control logic across 3 functional interactive prototypes. Integrated ultrasonic and motion sensors with microcontroller boards for real-time automated data feedback.',
    badge: 'Microcontrollers • Sensors • Hardware Logic',
  },
];

export default function Activities() {
  return (
    <section className="w-full max-w-7xl mx-auto px-margin py-20" id="activities">
      <div className="flex flex-col gap-space-xs mb-space-lg">
        <span className="font-code text-xs font-semibold uppercase text-secondary tracking-widest">
          Leadership &amp; Engineering Teams
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
          Extracurricular Activities
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {activities.map((act, idx) => (
          <div
            key={idx}
            className="p-space-lg rounded-xl bg-surface-container shadow-md border border-outline-variant/20 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-space-sm mb-space-xs">
                <span className={`material-symbols-outlined text-${act.accentColor} text-[24px]`}>
                  {act.icon}
                </span>
                <span className={`font-code text-xs text-${act.accentColor}`}>
                  {act.period}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-on-surface mb-1">
                {act.title}
              </h3>
              <p className="text-sm sm:text-base text-primary mb-space-md">
                {act.subtitle}
              </p>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                {act.description}
              </p>
            </div>
            <div className="pt-space-md flex items-center gap-2 mt-4 border-t border-outline-variant/10">
              <span className={`w-2 h-2 rounded-full bg-${act.accentColor}`} />
              <span className="font-code text-xs text-outline">{act.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}