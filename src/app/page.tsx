"use client";
import Image from "next/image";
//import Cursor from "@/components/cursor";
import About from "./_components/about";
import Projects from "./_components/projects";
import Experience from "./_components/experience";

import { useEffect, useState, useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <div className="flex flex-row items-center justify-center">
        <section className=" flex flex-col">
          <div className="items-start">
            <h1 className="p-3 text-6xl text-white">Justin Roderick</h1>
            <h2 className="p-3 text-3xl text-white">
              Full-Stack Software Developer majoring in Computer Sciecne at UCF
            </h2>
          </div>
        </section>
        <section className="flex flex-row justify-center"></section>
      </div>
    </div>
  );
}
