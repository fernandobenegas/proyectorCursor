"use client";

import { useEffect, useState } from "react";

interface Flake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  opacity: number;
}

export default function FrostBackground() {
  const [flakes, setFlakes] = useState<Flake[]>([]);

  useEffect(() => {
    const amount = window.innerWidth < 768 ? 15 : 35;

    const generated: Flake[] = Array.from({ length: amount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 40 + Math.random() * 50,
      speed: 15 + Math.random() * 20,
      rotation: Math.random() * 360,
      opacity: 0.30 + Math.random() * 0.35,
    }));

    setFlakes(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {flakes.map((flake) => (
        <img
          key={flake.id}
          src="/images/snowflake.png"
          alt=""
          className="snowflake"
          style={{
            left: `${flake.x}%`,
            top: `${flake.y}%`,
            width: flake.size,
            opacity: flake.opacity,
            animationDuration: `${flake.speed}s`,
            transform: `rotate(${flake.rotation}deg)`
          }}
        />
      ))}
    </div>
  );
}