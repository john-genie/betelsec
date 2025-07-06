'use client';

import { motion } from 'framer-motion';

export function AnimatedEye() {
  const openPath = "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z";
  const closedPath = "M2 12s3-1 10-1 10 1 10 1-3 1-10 1-10-1-10-1Z";

  // Timings for animations
  const fullCycleDuration = 5; // Total animation time
  const blinkStartTime = fullCycleDuration * 0.9;
  const blinkEndTime = fullCycleDuration * 0.95;

  return (
    // 1. Container for left-right movement
    <motion.div
      className="relative h-8 w-8"
      animate={{ x: [-8, 8] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
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
        style={{ overflow: 'visible' }} 
      >
        {/* 2. Eyelid animation for blinking */}
        <motion.path
          d={openPath}
          animate={{ d: [openPath, openPath, closedPath, openPath] }}
          transition={{
            duration: fullCycleDuration,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, blinkStartTime / fullCycleDuration, blinkEndTime / fullCycleDuration, 1],
          }}
        />
        
        {/* 3. Pupil animation for scanning and hiding during blink */}
        <motion.circle
          cx="12"
          cy="12"
          r="3"
          fill="currentColor"
          strokeWidth="0"
          animate={{
            x: [0, 3, -4, 0, 2, -2, 0],
            y: [0, -2, 3, -1, 4, 1, 0],
            opacity: [1, 1, 0, 1],
          }}
          transition={{
            x: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse' },
            y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse' },
            opacity: { 
              duration: fullCycleDuration, 
              repeat: Infinity, 
              ease: 'easeInOut',
              times: [0, blinkStartTime / fullCycleDuration, blinkEndTime / fullCycleDuration, 1]
            },
          }}
        />
      </svg>
    </motion.div>
  );
}
