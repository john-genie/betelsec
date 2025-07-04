'use client';

import { BrainCircuit } from 'lucide-react';
import { InteractiveCard } from './interactive-card';

export function PrismAnimation() {
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
        {/* Background glow */}
        <div
          className="absolute h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          style={{ transform: 'translateZ(-80px)' }}
        />

        <div
          className="relative animate-float"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Central Pulsing Hexagon Shield */}
          <div className="animate-pulse-slow">
            <svg
              viewBox="0 0 200 200"
              className="relative h-48 w-48 fill-primary/5 stroke-primary/30"
              style={{ transform: 'translateZ(50px)' }}
            >
              <path
                d="M100 10 L186.6 50 L186.6 150 L100 190 L13.4 150 L13.4 50 Z"
                strokeWidth="2"
              />
            </svg>
          </div>
          
          {/* AI Core */}
          <div className="absolute inset-0 flex items-center justify-center">
             <BrainCircuit
                className="h-16 w-16 text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.7)]"
                strokeWidth={1.5}
                style={{ transform: 'translateZ(80px)' }}
              />
          </div>

          {/* Orbiting Rings */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: 'translateZ(0px) rotateX(75deg)' }}
          >
            <div className="h-[250px] w-[250px] rounded-full border-t-2 border-dashed border-primary/50 animate-spin-slow" />
          </div>
           <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: 'translateZ(20px) rotateX(75deg)' }}
          >
            <div className="h-[300px] w-[300px] rounded-full border-b-2 border-dashed border-primary/30 animate-spin-medium" />
          </div>
           <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: 'translateZ(-20px) rotateX(75deg)' }}
          >
            <div className="h-[200px] w-[200px] rounded-full border-r-2 border-dashed border-primary/20 animate-spin-reverse-slow" />
          </div>
        </div>
      </div>
    </InteractiveCard>
  );
}
