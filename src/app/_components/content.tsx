'use client';

import About from './about';
import Projects from './projects';
import Experience from './experience';
import { Button } from '@/components/ui/button';
import { projects, experience } from '@/consts/index';
import Image from 'next/image';

import Link from 'next/link';
import dynamic from 'next/dynamic';

import { useWindowSize } from '@/hooks/useWindowSize';

import { useEffect, useState, useRef } from 'react';

const CustomCanvas = dynamic<{ svgPath: string; onReady?: () => void }>(
  () => import('./three/canvas').then((m) => m.CustomCanvas),
  { ssr: false }
);

function IconCanvas({ svgPath }: { svgPath: string }) {
  const [ready, setReady] = useState(false);
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <CustomCanvas svgPath={svgPath} onReady={() => setReady(true)} />
      </div>
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={svgPath} alt="icon" width={52} height={52} />
        </div>
      )}
    </div>
  );
}

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
    <div className="flex flex-col min-h-screen lg:grid lg:grid-cols-2 lg:h-screen">
      <div className="flex flex-col items-center justify-start pt-16 px-4 lg:sticky lg:top-0 lg:justify-center lg:pt-0 lg:pl-20 lg:px-0">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl p-6 text-white font-bold w-full text-center animate-fade-down xl:text-5xl">
            Justin Roderick
          </h1>
          <p className="text-lg pb-10 text-white w-full text-center animate-fade-down xl:text-2xl">
            Computer Science Student @ UCF
          </p>
          <div className="flex flex-row lg:flex-col gap-6 mt-4 lg:mt-8">
            <Button
              className={`
          relative text-cyan-50 xl:text-lg md:text-md 
          bg-slate-900/40 backdrop-blur-sm
          border border-slate-700/50
          hover:bg-slate-800/60 hover:border-cyan-400/50 hover:text-cyan-50
          hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]
          transition-all duration-300
          ${
            activeSection === 'about'
              ? 'bg-slate-800/60 border-cyan-400/70 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
              : ''
          }
        `}
              variant="ghost"
              onClick={() => scrollToSection(aboutRef, 'about')}
            >
              <span className="relative inline-block">
                About
                {activeSection === 'about' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                )}
              </span>
            </Button>

            <Button
              className={`
          relative text-cyan-50 xl:text-lg md:text-md 
          bg-slate-900/40 backdrop-blur-sm
          border border-slate-700/50
          hover:bg-slate-800/60 hover:border-cyan-400/50 hover:text-cyan-50
          hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]
          transition-all duration-300
          ${
            activeSection === 'projects'
              ? 'bg-slate-800/60 border-cyan-400/70 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
              : ''
          }
        `}
              variant="ghost"
              onClick={() => scrollToSection(projectsRef, 'projects')}
            >
              <span className="relative inline-block">
                Projects
                {activeSection === 'projects' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                )}
              </span>
            </Button>

            <Button
              className={`
          relative text-cyan-50 xl:text-lg md:text-md 
          bg-slate-900/40 backdrop-blur-sm
          border border-slate-700/50
          hover:bg-slate-800/60 hover:border-cyan-400/50 hover:text-cyan-50
          hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]
          transition-all duration-300
          ${
            activeSection === 'experience'
              ? 'bg-slate-800/60 border-cyan-400/70 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
              : ''
          }
        `}
              variant="ghost"
              onClick={() => scrollToSection(experienceRef, 'experience')}
            >
              <span className="relative inline-block">
                Experience
                {activeSection === 'experience' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                )}
              </span>
            </Button>
          </div>

          <div className="mt-12 lg:mt-20 flex flex-row gap-6 p-4 items-center justify-center">
            <Link href="https://github.com/justinroderick" target="_blank">
              <div className="w-16 h-16 lg:w-24 lg:h-24 transition-all duration-300 ease-in-out hover:scale-110">
                <IconCanvas svgPath="/github.svg" />
              </div>
            </Link>
            <Link href="https://linkedin.com/in/justinroderick" target="_blank">
              <div className="w-16 h-16 lg:w-24 lg:h-24 transition-all duration-300 ease-in-out hover:scale-110">
                <IconCanvas svgPath="/linkedin.svg" />
              </div>
            </Link>
            <Link href="https://justinroderick.dev/resume.pdf" target="_blank">
              <div className="w-16 h-16 lg:w-24 lg:h-24 transition-all duration-300 ease-in-out hover:scale-110">
                <IconCanvas svgPath="/resume.svg" />
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
          <Projects projects={projects} />
        </div>
        <div id="experience" ref={experienceRef}>
          <Experience experience={experience} />
        </div>
      </div>
    </div>
  );
}
