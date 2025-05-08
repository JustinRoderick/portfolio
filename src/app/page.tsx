'use client';
import Image from 'next/image';
//import Cursor from "@/components/cursor";
import About from './_components/about';
import Projects from './_components/projects';
import Experience from './_components/experience';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Spotlight } from './_components/spotlight';
import { Button } from '@/components/ui/button';

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
        <div className="flex flex-col gap-4 mt-8">
          <Button variant="outline" onClick={() => scrollToSection(aboutRef)}>
            About
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection(projectsRef)}
          >
            Projects
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection(experienceRef)}
          >
            Experience
          </Button>
        </div>
        {/* </Spotlight> */}
      </div>
      <div className="h-full snap-y snap-mandatory overflow-y-scroll flex flex-col items-center justify-center">
        <ScrollArea className="w-full h-full">
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={experienceRef}>
            <Experience />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

// 'use client';
// import { HTMLAttributes } from 'react';
// import useSpotlightEffect from '@/hooks/use-spotlight';

// // Define an interface for the spotlight configuration
// interface SpotlightConfig {
//   radius?: number;
//   brightness?: number;
//   color?: string;
//   smoothing?: number;
// }

// // Combine props with potential HTML canvas attributes
// interface SpotlightCursorProps extends HTMLAttributes<HTMLCanvasElement> {
//   config?: SpotlightConfig;
// }

// const SpotlightCursor = ({
//   config = {},
//   className,
//   ...rest
// }: SpotlightCursorProps) => {
//   // Provide default configuration if not specified
//   const spotlightConfig = {
//     radius: 200,
//     brightness: 0.15,
//     color: '#ffffff',
//     smoothing: 0.1,
//     ...config,
//   };

//   const canvasRef = useSpotlightEffect(spotlightConfig);

//   return (
//     <canvas
//       ref={canvasRef}
//       className={`fixed top-0 left-0 pointer-events-none z-[9999] w-full h-full ${className}`}
//       {...rest}
//     />
//   );
// };

// export default SpotlightCursor;
