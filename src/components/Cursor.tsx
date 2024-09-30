"use client";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <div
      id="gradientCircle"
      className="absolute w-32 h-32 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full pointer-events-none"
      style={{
        transform: `translate(${mousePosition.x - 64}px, ${
          mousePosition.y - 64
        }px)`,
      }}
    />
  );
}
