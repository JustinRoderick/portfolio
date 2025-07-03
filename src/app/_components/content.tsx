'use client';
import Image from 'next/image';
import About from './about';
import Projects from './projects';
import Experience from './experience';
import { Button } from '@/components/ui/button';

import Link from 'next/link';

import { useWindowSize } from '@/hooks/useWindowSize';

import { CustomCanvas } from './three/canvas';

import { useEffect, useState, useRef } from 'react';

export default function Content() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const [activeSection, setActiveSection] = useState<string>('about');

  const { width } = useWindowSize();
  const isDesktop = width ? width >= 1024 : false;

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    sectionId: string
  ) => {
    const target = isDesktop ? scrollContainerRef.current : window;
    if (!ref.current) return;

    target?.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const scrollableRoot = isDesktop ? scrollContainerRef.current : null;
    if (isDesktop && !scrollableRoot) return;

    const observerOptions = {
      root: scrollableRoot,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = [
      { ref: aboutRef, id: 'about' },
      { ref: projectsRef, id: 'projects' },
      { ref: experienceRef, id: 'experience' },
    ];

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [isDesktop]);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:h-screen">
      <div className="flex flex-col items-center justify-start pt-16 px-4 lg:sticky lg:top-0 lg:justify-center lg:pt-0 lg:pl-20 lg:px-0">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl p-6 text-white font-bold w-full text-center animate-fade-down xl:text-5xl">
            Justin Roderick
          </h1>
          <p className="text-lg pb-10 text-white w-full text-center animate-fade-down xl:text-2xl">
            Software Engineering Student @ UCF
          </p>
          <div className="flex flex-row lg:flex-col gap-6 mt-4 lg:mt-8">
            <Button
              className={`text-white xl:text-lg md:text-md hover:bg-fuchsia-900 hover:text-white transition-all duration-300 ${activeSection === 'about' ? 'underline decoration-sky-400 decoration-2 underline-offset-4' : ''}`}
              variant="ghost"
              onClick={() => scrollToSection(aboutRef, 'about')}
            >
              About
            </Button>
            <Button
              className={`text-white xl:text-lg md:text-md hover:bg-fuchsia-900 hover:text-white transition-all duration-300 ${activeSection === 'projects' ? 'underline decoration-sky-400 decoration-2 underline-offset-4' : ''}`}
              variant="ghost"
              onClick={() => scrollToSection(projectsRef, 'projects')}
            >
              Projects
            </Button>
            <Button
              className={`text-white xl:text-lg md:text-md hover:bg-fuchsia-900 hover:text-white transition-all duration-300 ${activeSection === 'experience' ? 'underline decoration-sky-400 decoration-2 underline-offset-4' : ''}`}
              variant="ghost"
              onClick={() => scrollToSection(experienceRef, 'experience')}
            >
              Experience
            </Button>
          </div>

          <div className="mt-12 lg:mt-20 flex flex-row gap-6 p-4 items-center justify-center">
            <Link href="https://github.com/justinroderick">
              <div className="w-16 h-16 lg:w-24 lg:h-24 transition-all duration-300 ease-in-out hover:scale-110">
                <CustomCanvas svgPath="/github.svg" />
              </div>
            </Link>
            <Link href="https://linkedin.com/in/justinroderick">
              <div className="w-16 h-16 lg:w-24 lg:h-24 transition-all duration-300 ease-in-out hover:scale-110">
                <CustomCanvas svgPath="/linkedin.svg" />
              </div>
            </Link>
            <Link href="https://justinroderick.dev/resume.pdf">
              <div className="w-16 h-16 lg:w-24 lg:h-24 transition-all duration-300 ease-in-out hover:scale-110">
                <CustomCanvas svgPath="/resume.svg" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="w-full lg:overflow-y-auto lg:snap-y lg:snap-mandatory"
      >
        <div id="about" ref={aboutRef}>
          <About />
        </div>
        <div id="projects" ref={projectsRef}>
          <Projects />
        </div>
        <div id="experience" ref={experienceRef}>
          <Experience />
        </div>
      </div>
    </div>
  );
}
