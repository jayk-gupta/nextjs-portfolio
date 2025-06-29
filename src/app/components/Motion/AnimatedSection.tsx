"use client"
import { HTMLMotionProps, motion as motionType } from "motion/react";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../../../../lib/utils";
type Props = HTMLMotionProps<"section"> & {
  as?: keyof typeof motionType;
};

export default function AnimatedSection({
  children,
  className,
  as = "section",
  ...rest
}: Props) {
  const MotionTag = motion[as] as React.ElementType;

  return (
    <MotionTag
      className={cn("py-20 px-6 max-w-5xl mx-auto", className)}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
