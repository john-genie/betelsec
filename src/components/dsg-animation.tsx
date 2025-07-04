'use client';

import { DatabaseZap } from 'lucide-react';
import { InteractiveCard } from './interactive-card';

export function DsgAnimation() {
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
          {/* Central Database Icon */}
          <DatabaseZap
            className="relative h-24 w-24 text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.7)]"
            strokeWidth={1}
            style={{ transform: 'translateZ(60px)' }}
          />
          
          {/* Pulsing Shields */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-48 w-48 rounded-full border-2 border-primary/20 animate-pulse-slow"
              style={{ transform: 'translateZ(20px)' }}
            />
          </div>
           <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-64 w-64 rounded-full border-2 border-primary/20 animate-pulse-slow"
              style={{ animationDelay: '0.5s', transform: 'translateZ(0px)' }}
            />
          </div>
           <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-80 w-80 rounded-full border border-dashed border-primary/10 animate-pulse-slow"
              style={{ animationDelay: '1s', transform: 'translateZ(-20px)' }}
            />
          </div>
        </div>
      </div>
    </InteractiveCard>
  );
}
