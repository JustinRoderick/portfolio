import Image from "next/image";
//import Cursor from "@/components/cursor";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <body className="flex min-h-screen overflow-y-scroll bg-blue-950">
      <div className=" flex flex-1 flex-row items-center justify-center p-10 ">
        <div className="flex flex-col">
          <div className="justify-center items-center p-3">
            <h1 className="p-3 text-6xl text-white">Justin Roderick</h1>
            <h2 className="p-3 text-3xl text-white">
              Full-Stack Software Developer majoring in Computer Sciecne at UCF
            </h2>
          </div>
        </div>
        <div className="flex flex-col">
          {/*<h1 className="p-3 text-3xl text-white">About</h1>*/}
        </div>
      </div>
    </body>
  );
}
