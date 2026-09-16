import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-background min-h-screen text-on-surface antialiased">
      <Header />
      <main className="w-full pt-20">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Activities />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}