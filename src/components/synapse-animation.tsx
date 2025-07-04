'use client';

import { Network } from 'lucide-react';
import { InteractiveCard } from './interactive-card';

export function SynapseAnimation() {
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
          {/* Central Network Icon */}
          <Network
            className="relative h-24 w-24 text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.7)]"
            strokeWidth={1}
            style={{ transform: 'translateZ(60px)' }}
          />

          {/* Data Packets Orbiting */}
          <div className="absolute inset-0">
            {/* Orbit Path 1 */}
            <div className="absolute inset-0 animate-spin-slow" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(70deg) rotateX(20deg)' }}>
              <div className="data-packet" style={{ animationDelay: '0s' }} />
            </div>
             {/* Orbit Path 2 */}
            <div className="absolute inset-0 animate-spin-medium" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-60deg) rotateX(30deg)' }}>
                <div className="data-packet" style={{ animationDelay: '0.5s' }} />
            </div>
             {/* Orbit Path 3 */}
            <div className="absolute inset-0 animate-spin-reverse-slow" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(80deg) rotateX(50deg) ' }}>
                <div className="data-packet" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </InteractiveCard>
  );
}
