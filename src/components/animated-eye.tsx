'use client';

import { motion } from 'framer-motion';

export function AnimatedEye() {
  return (
    <div className="relative h-8 w-8">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full text-primary"
      >
        {/* Blinking animation applied to the whole eye group */}
        <motion.g
          style={{ transformOrigin: 'center' }}
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.8, 0.85, 0.9, 1], // Blink happens quickly towards the end of the duration
          }}
        >
          {/* Eye outline */}
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          
          {/* Pupil with looking around animation */}
          <motion.circle
            cx="12"
            cy="12"
            r="3"
            fill="currentColor"
            strokeWidth="0"
            animate={{
              x: [0, 3, -2, 2, -3, 0], // More dynamic path
              y: [-1, 2, -2, 2, 1, -1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
