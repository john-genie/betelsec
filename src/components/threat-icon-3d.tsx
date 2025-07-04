'use client';

import { AlertTriangle } from 'lucide-react';
import { InteractiveCard } from './interactive-card';

export function ThreatIcon3D() {
  return (
    <InteractiveCard className="h-full w-full">
      <div
        className="relative flex h-[400px] w-full max-w-lg items-center justify-center rounded-lg border bg-secondary/30 p-8 shadow-2xl backdrop-blur-sm overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          background: 'radial-gradient(ellipse at center, hsl(var(--secondary) / 0.5) 0%, hsl(var(--background)) 70%)',
        }}
      >
        {/* Background glow */}
        <div
          className="absolute h-64 w-64 rounded-full bg-destructive/10 blur-3xl"
          style={{ transform: 'translateZ(-50px)' }}
        />

        {/* Main Icon container with floating animation */}
        <div className="relative animate-float" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Main Icon */}
          <AlertTriangle
            className="relative h-48 w-48 text-destructive drop-shadow-[0_0_15px_hsl(var(--destructive)/0.7)]"
            strokeWidth={1}
            style={{ transform: 'translateZ(80px)' }}
          />
          
          {/* Orbiting Ring - Back */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: 'translateZ(0px) rotateX(75deg)' }}
          >
            <div className="h-[250px] w-[250px] rounded-full border-t-2 border-destructive/50 animate-spin-slow" />
          </div>

          {/* Orbiting Ring - Front */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: 'translateZ(40px) rotateX(-65deg) rotateY(20deg)' }}
          >
            <div className="h-[300px] w-[300px] rounded-full border-r-2 border-destructive/30 animate-spin-reverse-slow" />
          </div>

          {/* Foreground text element */}
           <div 
            className="absolute bottom-[-40px] left-0 right-0 text-center text-xs font-bold uppercase text-destructive/80"
            style={{ transform: 'translateZ(120px)' }}
          >
            LIVE THREAT
          </div>
        </div>
      </div>
    </InteractiveCard>
  );
}
