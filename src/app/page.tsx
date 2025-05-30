'use client';
import Image from 'next/image';
import About from './_components/about';
import Projects from './_components/projects';
import Experience from './_components/experience';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';

const CustomCanvas = dynamic(
  () =>
    import('./_components/three/resume/canvas').then((mod) => mod.CustomCanvas),
  { ssr: false, loading: () => <p>Loading 3D Canvas...</p> }
);

import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const [activeSection, setActiveSection] = useState<string>('about');

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    sectionId: string
  ) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const scrollableDiv = scrollContainerRef.current;
    if (!scrollableDiv) return;

    const observerOptions = {
      root: scrollableDiv,
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
  }, [aboutRef, projectsRef, experienceRef, scrollContainerRef]);

  return (
    <div className="h-screen grid grid-cols-2">
      <div className="h-full flex flex-col items-center justify-start pt-24">
        {/* <Spotlight> */}
        <h1 className="text-3xl text-white font-bold w-full text-center animate-fade-down">
          Justin Roderick
        </h1>
        <p className="text-xl text-white w-full text-center animate-fade-down">
          Software Engineering Student at UCF
        </p>
        <div className="flex flex-col gap-4 mt-8">
          <Button
            className={`text-white hover:bg-fuchsia-900 hover:text-white transition-all duration-300 ${activeSection === 'about' ? 'underline decoration-sky-400 decoration-2 underline-offset-4' : ''}`}
            variant="ghost"
            onClick={() => scrollToSection(aboutRef, 'about')}
          >
            About
          </Button>
          <Button
            className={`text-white hover:bg-fuchsia-900 hover:text-white transition-all duration-300 ${activeSection === 'projects' ? 'underline decoration-sky-400 decoration-2 underline-offset-4' : ''}`}
            variant="ghost"
            onClick={() => scrollToSection(projectsRef, 'projects')}
          >
            Projects
          </Button>
          <Button
            className={`text-white hover:bg-fuchsia-900 hover:text-white transition-all duration-300 ${activeSection === 'experience' ? 'underline decoration-sky-400 decoration-2 underline-offset-4' : ''}`}
            variant="ghost"
            onClick={() => scrollToSection(experienceRef, 'experience')}
          >
            Experience
          </Button>
        </div>
        <div className="mt-12 flex flex-row gap-6 p-4 items-center justify-center">
          <div className="w-16 h-16 transition-all duration-300 ease-in-out hover:scale-110">
            <CustomCanvas />
          </div>
          {/* Placeholders for other icons can go here */}
          {/* <div className="w-16 h-16"><p className='text-white'>GH</p></div> */}
          {/* <div className="w-16 h-16"><p className='text-white'>LI</p></div> */}
          {/* <div className="w-16 h-16"><p className='text-white'>EM</p></div> */}
        </div>
        {/* </Spotlight> */}
      </div>
      <div
        ref={scrollContainerRef}
        className="h-full snap-y snap-mandatory overflow-y-scroll flex flex-col items-center justify-center"
      >
        <ScrollArea className="w-full h-full">
          <div id="about" ref={aboutRef}>
            <About />
          </div>
          <div id="projects" ref={projectsRef}>
            <Projects />
          </div>
          <div id="experience" ref={experienceRef}>
            <Experience />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
