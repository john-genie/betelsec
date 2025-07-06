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
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <motion.circle
          cx="12"
          cy="12"
          r="3"
          fill="currentColor"
          animate={{
            x: [-2, 2, -2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'mirror',
          }}
        />
        {/* A simple blinking effect by scaling a line */}
        <motion.path
          d="M2 12 L 22 12"
          strokeWidth="2.5"
          stroke="hsl(var(--primary))"
          initial={{ scaleY: 0 }}
          animate={{
            scaleY: [0, 1, 0, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.05, 0.1, 1],
          }}
          style={{ transformOrigin: 'center' }}
        />
      </svg>
    </div>
  );
}
