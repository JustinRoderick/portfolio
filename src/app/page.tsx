"use client";
import Image from "next/image";
//import Cursor from "@/components/cursor";
import About from "./_components/about";
import Projects from "./_components/projects";
import Experience from "./_components/experience";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useEffect, useState, useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen grid-cols-2 snap-y snap-mandatory overflow-y-scroll">
      <div className="flex flex-row items-center justify-center">
        <div className=" flex-1 flex-col col-span-1">
        </div>
        <div className="flex-1 flex-col col-span-1">
        </div>
      </div>
    </div>
  );
}
