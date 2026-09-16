import React, { useState } from 'react';

const projects = [
  {
    id: 'course-mgmt',
    path: '~/projects/course-management-system',
    date: '(Aug 2026)',
    title: 'Course Management System (Django Full-Stack)',
    tags: ['Django', 'Python', 'SQLite', 'Authentication', 'HTML/CSS', 'JavaScript'],
    description:
      'Full-stack course management platform built with Django. Handles dual authentication flows for instructors and students, interactive course filtering, student enrollment records, and relational database migrations.',
    codeLink: 'https://github.com/ahmed-zaki-dev/course-management-system',
    type: 'web',
    renderPreview: () => (
      <div className="rounded-lg bg-surface-container-low p-space-md border border-outline-variant/10 transition-all duration-300 group-hover:border-secondary/20">
        <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-outline-variant/10">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[20px]">school</span>
            <span className="font-code text-xs text-on-surface font-semibold">
              Django MVC • Auth &amp; Enrollment
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-code text-xs">
            Full-Stack App
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 rounded bg-surface-container text-on-surface-variant font-code text-xs">
            Portals: Instructor &amp; Student
          </div>
          <div className="p-2 rounded bg-surface-container text-secondary font-code text-xs">
            Stack: Django + Python ORM
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'smart-library',
    path: '~/projects/smart-library-cli',
    date: '(Aug 2026)',
    title: 'Smart Library Management System',
    tags: ['Python', 'OOP', 'CLI System', 'Data Structures'],
    description:
      'Object-oriented terminal system managing book inventories, member registrations, automated checkout timers, and overdue penalties with rigorous input validation and error handling.',
    codeLink: 'https://github.com/ahmed-zaki-dev/ITI-Python-Tasks/tree/main/Iti-py_tasks/final%20project',
    type: 'cli',
    renderPreview: () => (
      <div className="rounded-lg bg-surface-container-low p-space-md font-code text-xs space-y-1.5 border border-outline-variant/10 transition-all duration-300 group-hover:border-primary/20">
        <div className="text-secondary">$ python smart_library_mang_sys.py</div>
        <div className="text-on-surface-variant">--- SMART LIBRARY MANAGEMENT SYSTEM ---</div>
        <div className="text-primary">[+] 1. Add Book  2. Borrow  3. View Inventory</div>
        <div className="text-primary-fixed flex items-center gap-2 pt-1">
          <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
          <span>OOP Principles • Custom Exceptions</span>
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);
  const [copiedCmd, setCopiedCmd] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-margin py-20 scroll-mt-24" id="projects">
      <div className="flex flex-col gap-space-xs mb-space-lg">
        <span className="font-code text-xs font-semibold uppercase text-secondary tracking-widest">
          Selected Works &amp; Architecture
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="rounded-2xl bg-surface-container overflow-hidden shadow-xl border border-outline-variant/20 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-outline-variant/50 hover:shadow-2xl group"
          >
            <div>
              <div className="px-space-md py-2.5 bg-surface-container-high flex items-center justify-between border-b border-outline-variant/20">
                <span className="font-code text-xs text-secondary font-medium truncate">
                  {proj.path}
                </span>
                <span className="font-code text-xs text-outline shrink-0 ml-2">{proj.date}</span>
              </div>

              <div className="p-space-lg bg-surface-container-lowest">
                {proj.renderPreview()}
              </div>

              <div className="p-space-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-on-surface mb-2 transition-colors duration-200 group-hover:text-primary">
                  {proj.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-space-md">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-code text-xs border border-transparent hover:border-primary/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {proj.description}
                </p>
              </div>
            </div>

            <div className="px-space-lg pb-space-lg pt-space-xs flex items-center gap-space-md">
              <button
                type="button"
                onClick={() => setActiveModal(proj.id)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-code text-sm font-semibold shadow-md shadow-primary-container/20 hover:bg-primary hover:shadow-primary-container/40 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {proj.type === 'cli' ? 'terminal' : 'rocket_launch'}
                </span>
                {proj.type === 'cli' ? 'Run CLI' : 'Live Demo'}
              </button>
              
              <a
                href={proj.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-code text-sm border border-outline-variant/30 hover:border-secondary/50 hover:bg-surface-bright hover:text-secondary active:scale-[0.98] transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[18px]">code</span>
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal: Interactive Project Runner / Instructions */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-2xl bg-surface-container border border-outline-variant/40 shadow-2xl p-6 sm:p-8 flex flex-col gap-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  {activeModal === 'smart-library' ? 'terminal' : 'dns'}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-on-surface">
                  {activeModal === 'smart-library'
                    ? 'Smart Library Terminal Execution'
                    : 'Course Management System • Setup'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Modal Content */}
            {activeModal === 'smart-library' ? (
              <div className="flex flex-col gap-4">
                <p className="text-sm text-on-surface-variant">
                  This application runs in the console. You can clone the repository and execute it locally using Python:
                </p>
                <div className="p-4 rounded-xl bg-surface-container-lowest font-code text-xs space-y-2 border border-outline-variant/20 text-on-surface">
                  <div className="text-outline"># 1. Clone &amp; Navigate</div>
                  <div className="text-secondary">git clone https://github.com/ahmed-zaki-dev/ITI-Python-Tasks.git</div>
                  <div className="text-secondary">cd ITI-Python-Tasks/Iti-py_tasks/"final project"</div>
                  <div className="text-outline pt-2"># 2. Run the application</div>
                  <div className="text-primary font-bold">python smart_library_mang_sys.py</div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(
                        'git clone https://github.com/ahmed-zaki-dev/ITI-Python-Tasks.git && cd ITI-Python-Tasks/Iti-py_tasks/"final project" && python smart_library_mang_sys.py'
                      )
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high text-on-surface hover:text-secondary font-code text-xs transition-colors border border-outline-variant/30"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copiedCmd ? 'check' : 'content_copy'}
                    </span>
                    {copiedCmd ? 'Command Copied!' : 'Copy One-Line Command'}
                  </button>
                  <a
                    href="https://github.com/ahmed-zaki-dev/ITI-Python-Tasks/tree/main/Iti-py_tasks/final%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-code text-xs font-semibold hover:bg-primary transition-colors"
                  >
                    <span>View on GitHub</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <p className="text-sm text-on-surface-variant">
                  This Django full-stack project is designed for local deployment with database migrations and superuser controls:
                </p>
                <div className="p-4 rounded-xl bg-surface-container-lowest font-code text-xs space-y-1.5 border border-outline-variant/20 text-on-surface max-h-56 overflow-y-auto">
                  <div className="text-outline"># Clone &amp; setup environment</div>
                  <div className="text-secondary">git clone https://github.com/ahmed-zaki-dev/course-management-system.git</div>
                  <div className="text-secondary">cd course-management-system</div>
                  <div className="text-secondary">pip install django</div>
                  <div className="text-outline pt-1"># Migrations &amp; Server</div>
                  <div className="text-secondary">python manage.py migrate</div>
                  <div className="text-primary font-bold">python manage.py runserver</div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(
                        'git clone https://github.com/ahmed-zaki-dev/course-management-system.git && cd course-management-system && pip install django && python manage.py migrate && python manage.py runserver'
                      )
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high text-on-surface hover:text-secondary font-code text-xs transition-colors border border-outline-variant/30"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copiedCmd ? 'check' : 'content_copy'}
                    </span>
                    {copiedCmd ? 'Commands Copied!' : 'Copy Quick Setup'}
                  </button>
                  <a
                    href="https://github.com/ahmed-zaki-dev/course-management-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-code text-xs font-semibold hover:bg-primary transition-colors"
                  >
                    <span>View Repository</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
}