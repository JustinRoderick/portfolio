import Image from "next/image";
//import Cursor from "@/components/cursor";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-row items-center justify-center ">
      <section className=" flex flex-col ">
        <div className="justify-center items-center p-3">
          <h1 className="p-3 text-6xl text-white">Justin Roderick</h1>
          <h2 className="p-3 text-3xl text-white">
            Full-Stack Software Developer majoring in Computer Sciecne at UCF
          </h2>
        </div>
      </section>
      <section className="flex flex-1 flex-row justify-center"></section>
    </div>
  );
}
