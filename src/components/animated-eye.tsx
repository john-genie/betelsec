'use client';

import { motion } from 'framer-motion';

export function AnimatedEye() {
  const openPath = "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z";
  const closedPath = "M2 12s3-1 10-1 10 1 10 1-3 1-10 1-10-1-10-1Z";

  return (
    <motion.div
      className="relative h-8 w-8"
      animate={{
        x: [-8, 8],
        y: 0,
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatType: 'mirror',
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full text-primary"
      >
        <motion.path
          d={openPath}
          animate={{ d: [openPath, openPath, closedPath, openPath] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.9, 0.95, 1],
          }}
        />
        <motion.g
           animate={{
            opacity: [1, 1, 0, 1]
           }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.9, 0.95, 1],
            }}
        >
            <motion.circle
                cx="12"
                cy="12"
                r="3"
                fill="currentColor"
                strokeWidth="0"
                animate={{
                    x: [0, 4, -3, 0, 2, -4, 0],
                    y: [0, 2, 3, -2, -3, 1, 0],
                }}
                transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatType: 'loop',
                }}
            />
        </motion.g>
      </svg>
    </motion.div>
  );
}
