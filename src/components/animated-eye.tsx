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
          animate={{ scaleY: [1, 1, 0.1, 1] }}
          transition={{
            duration: 4, // A slightly faster cycle
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.9, 0.95, 1], // Blink is quicker
          }}
        >
          {/* Eye outline */}
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          
          {/* Pupil with more expressive looking around animation */}
          <motion.circle
            cx="12"
            cy="12"
            r="3"
            fill="currentColor"
            strokeWidth="0"
            animate={{
              // More expansive and varied movement to show it's "looking everywhere"
              x: [0, 4, -3, 0, 2, -4, 0], 
              y: [0, 2, 3, -2, -3, 1, 0],
            }}
            transition={{
              duration: 3.5, // Faster scanning
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: 'loop',
            }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
