'use client';

import { Database, UserX } from 'lucide-react';
import { InteractiveCard } from './interactive-card';
import { useState, useEffect } from 'react';

// Define a more specific type for the positions
interface SpyPosition {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  animationDelay: string;
}

export function HndlAnimation() {
  // Initialize state to an empty array. The positions will be set on the client.
  const [spyPositions, setSpyPositions] = useState<SpyPosition[]>([]);

  useEffect(() => {
    // This code runs only on the client, after the component has mounted.
    // This prevents a mismatch between server and client-rendered HTML.
    setSpyPositions([
      { top: '10%', left: '10%', animationDelay: `${Math.random() * 2}s` },
      { top: '10%', right: '10%', animationDelay: `${Math.random() * 2}s` },
      { bottom: '10%', left: '10%', animationDelay: `${Math.random() * 2}s` },
      { bottom: '10%', right: '10%', animationDelay: `${Math.random() * 2}s` },
    ]);
  }, []); // The empty dependency array ensures this effect runs only once.

  return (
    <InteractiveCard className="h-full w-full">
      <div
        className="relative flex h-[400px] w-full max-w-lg items-center justify-center rounded-lg border bg-secondary/30 p-8 shadow-2xl backdrop-blur-sm overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          background:
            'radial-gradient(ellipse at center, hsl(var(--secondary) / 0.5) 0%, hsl(var(--background)) 70%)',
        }}
      >
        <div
          className="absolute h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          style={{ transform: 'translateZ(-80px)' }}
        />

        {/* Spy icons are now rendered only after client-side hydration, with random delays */}
        {spyPositions.map((pos, i) => (
          <UserX
            key={i}
            className="absolute h-8 w-8 text-destructive/70"
            style={{
              top: pos.top,
              left: pos.left,
              bottom: pos.bottom,
              right: pos.right,
              transform: 'translateZ(20px)',
              animation: `float-in-space 4s ease-in-out infinite`,
              animationDelay: pos.animationDelay,
            }}
          />
        ))}

        <div className="animate-float" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative animate-pulse-slow">
            <Database
              className="relative h-24 w-24 text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.7)]"
              strokeWidth={1}
              style={{ transform: 'translateZ(60px)' }}
            />
          </div>
        </div>
      </div>
    </InteractiveCard>
  );
}
