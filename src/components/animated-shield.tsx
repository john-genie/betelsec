'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export function AnimatedShield() {
  return (
    <motion.div
      className="relative flex h-8 w-8 items-center justify-center"
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Shield className="h-full w-full text-primary" />
      <motion.div
        className="absolute inset-0"
        style={{
          borderRadius: '50%',
        }}
        animate={{
          boxShadow: [
            '0 0 0px hsl(var(--primary) / 0)',
            '0 0 20px hsl(var(--primary) / 0.4)',
            '0 0 0px hsl(var(--primary) / 0)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}
