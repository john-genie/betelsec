'use client';

import { useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';

type AnimatedCounterProps = {
  from: number;
  to: number;
};

export function AnimatedCounter({ from, to }: AnimatedCounterProps) {
  const count = useSpring(from, { mass: 0.8, stiffness: 75, damping: 15 });
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, to, {
        duration: 4,
        ease: 'easeOut'
    });
    return controls.stop;
  }, [from, to, count]);

  return <motion.span>{rounded}</motion.span>;
}
