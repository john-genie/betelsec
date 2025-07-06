'use client';

import { motion } from 'framer-motion';
import { Crosshair } from 'lucide-react';

export function AnimatedCrosshair() {
  return (
    <div className="relative flex h-8 w-8 items-center justify-center">
      <Crosshair className="absolute h-full w-full text-primary" />
      <motion.div
        className="absolute h-2 w-2 rounded-full bg-red-500"
        style={{
          boxShadow: '0 0 8px red',
        }}
        animate={{
          x: [0, 3, -2, 1, -3, 0],
          y: [0, -2, 3, -1, 2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
