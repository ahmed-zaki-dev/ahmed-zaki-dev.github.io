import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-space-xl">
      <div className="max-w-7xl mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-space-lg text-center md:text-left">
        
        {/* Brand & Rights */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-code text-sm text-primary font-bold">&lt;Ahmed.dev/&gt;</span>
            <span className="text-outline font-code text-xs">• Front End Engineer &amp; CE Student</span>
          </div>
          <p className="text-xs text-on-surface-variant">
            Crafted with precision • Modern Web Architecture &amp; Engineering
          </p>
          <p className="font-code text-xs text-outline">
            © 2026 Ahmed Mohamed. All rights reserved.
          </p>
        </div>

        {/* Links & Direct Contact */}
        <div className="flex flex-col sm:flex-row items-center gap-space-md">
          <div className="flex items-center gap-space-md font-code text-xs">
            <a
              href="https://github.com/ahmed-zaki-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              github.com/ahmed-zaki-dev
            </a>
            <a
              href="https://linkedin.com/in/ahmed-zaki-dev01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">public</span>
              linkedin.com/in/ahmed-zaki-dev01
            </a>
          </div>

          <a
            href="mailto:ahmed3mohamed6adm@gmail.com"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/30 text-on-surface hover:text-secondary hover:border-secondary transition-colors font-code text-xs"
          >
            <span className="material-symbols-outlined text-[16px] text-secondary">mail</span>
            ahmed3mohamed6adm@gmail.com
          </a>
        </div>

      </div>
    </footer>
  );
}