'use client';

import { ShieldOff } from 'lucide-react';
import { InteractiveCard } from './interactive-card';

export function Qrc84Animation() {
  const electronStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'hsl(var(--primary))',
    boxShadow: '0 0 8px hsl(var(--primary))',
    marginTop: '-4px',
    marginLeft: '-4px',
  };

  return (
    <InteractiveCard className="h-full w-full">
      <div
        className="relative flex h-[400px] w-full max-w-lg items-center justify-center rounded-lg border bg-background p-8 shadow-2xl backdrop-blur-sm overflow-hidden"
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
          {/* Central ShieldOff Icon (Nucleus) */}
          <ShieldOff
            className="relative h-24 w-24 text-primary drop-shadow-[0_0_15px_hsl(var(--primary)/0.7)]"
            strokeWidth={1}
            style={{ transform: 'translateZ(40px)' }}
          />

          {/* Electron Orbits */}
          <div className="absolute inset-0 w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            {/* Orbit 1 */}
            <div
              className="absolute inset-0 animate-spin-slow"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(70deg) rotateX(30deg)',
                animationDuration: '10s'
              }}
            >
              <div
                style={{
                  ...electronStyle,
                  transform: 'translateX(140px)',
                }}
              />
            </div>
            {/* Orbit 2 */}
            <div
              className="absolute inset-0 animate-spin-medium"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-60deg) rotateX(50deg)',
                animationDuration: '7s'
              }}
            >
               <div
                style={{
                  ...electronStyle,
                  transform: 'translateX(110px)',
                }}
              />
            </div>
            {/* Orbit 3 */}
            <div
              className="absolute inset-0 animate-spin-reverse-slow"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(20deg) rotateX(-60deg)',
                animationDuration: '15s'
              }}
            >
              <div
                style={{
                  ...electronStyle,
                  transform: 'translateX(90px)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </InteractiveCard>
  );
}
