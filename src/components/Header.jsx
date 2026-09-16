import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('portfolio');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-xl'
          : 'bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-space-md">
        
        {/* Logo & Availability Status */}
        <div className="flex items-center gap-space-md shrink-0">
          <a href="#portfolio" className="flex items-center gap-2 group">
            <img
              src={logoImg}
              alt="Ahmed Mohamed Logo"
              className="h-9 w-auto object-contain mix-blend-screen transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-code text-[11px] text-secondary-fixed uppercase tracking-wider font-semibold">
              Available for opportunities
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-space-md font-code text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 group ${
                  isActive ? 'text-primary font-medium' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.name}
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-secondary transition-transform origin-left duration-200 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Social Links */}
        <div className="flex items-center gap-space-sm">
          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/ahmed-zaki-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high active:scale-95 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">terminal</span>
            </a>
            <a
              href="https://linkedin.com/in/ahmed-zaki-dev01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high active:scale-95 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-container text-on-primary font-code text-xs font-semibold whitespace-nowrap shadow-md shadow-primary-container/25 hover:bg-primary hover:shadow-primary-container/45 active:scale-95 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </header>
  );
}