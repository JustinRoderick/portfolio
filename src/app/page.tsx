'use client';
import Image from 'next/image';
//import Cursor from "@/components/cursor";
import About from './_components/about';
import Projects from './_components/projects';
import Experience from './_components/experience';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Spotlight } from './_components/spotlight';

import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen grid grid-cols-2">
      <div className="h-full flex flex-col items-center justify-center">
        {/* <Spotlight> */}
        <h1 className="text-3xl text-white font-bold w-full text-center animate-fade-down">
          Justin Roderick
        </h1>
        <p className="text-xl text-white w-full text-center animate-fade-down">
          Software Engineering Student at UCF
        </p>
        {/* </Spotlight> */}
      </div>
      <div className="h-full snap-y snap-mandatory overflow-y-scroll flex flex-col items-center justify-center">
        <ScrollArea className="w-full h-full">
          <About />
          <Projects />
          <Experience />
        </ScrollArea>
      </div>
    </div>
  );
}
