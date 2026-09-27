"use client";

import { motion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.9,
}: RevealProps) {

  const distance = 60;

  const variants: Variants = {
    hidden: {

      opacity: 0,

      x:
        direction === "left"
          ? -distance
          : direction === "right"
          ? distance
          : 0,

      y:
        direction === "up"
          ? distance
          : direction === "down"
          ? -distance
          : 0,

      scale: 0.96,

      filter: "blur(8px)",
    },

    visible: {

      opacity: 1,

      x: 0,

      y: 0,

      scale: 1,

      filter: "blur(0px)",

      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
