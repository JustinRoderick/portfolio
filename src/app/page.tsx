'use client';
import Image from 'next/image';
import About from './_components/about';
import Projects from './_components/projects';
import Experience from './_components/experience';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const CustomCanvas = dynamic(
  () =>
    import('./_components/three/resume/canvas').then((mod) => mod.CustomCanvas),
  {
    ssr: false,
  }
);

import { Suspense, useEffect, useState, useRef } from 'react';

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
          <Link href="https://github.com/justinroderick">
            <div className="w-24 h-24 transition-all duration-300 ease-in-out hover:scale-110">
              <Suspense
                fallback={
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={96}
                    height={96}
                  />
                }
              >
                <CustomCanvas svgPath="/github.svg" />
              </Suspense>
            </div>
          </Link>
          <Link href="https://linkedin.com/in/justinroderick">
            <div className="w-24 h-24 transition-all duration-300 ease-in-out hover:scale-110">
              <Suspense
                fallback={
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={96}
                    height={96}
                  />
                }
              >
                <CustomCanvas svgPath="/linkedin.svg" />
              </Suspense>
            </div>
          </Link>
          <Link href="https://justinroderick.dev/resume.pdf">
            <div className="w-24 h-24 transition-all duration-300 ease-in-out hover:scale-110">
              <Suspense
                fallback={
                  <Image
                    src="/resume.svg"
                    alt="Resume"
                    width={96}
                    height={96}
                  />
                }
              >
                <CustomCanvas svgPath="/resume.svg" />
              </Suspense>
            </div>
          </Link>
        </div>
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
