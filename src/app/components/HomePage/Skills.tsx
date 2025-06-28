"use client"
import React, { useRef } from "react";
import skills from "@/data/skills.json";
import { useInView,motion } from "motion/react";

function Skills() {
  const ref = useRef(null)
  // Detect when the section is in view
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Trigger once when 20% of section is visible
  return (
    <motion.section
      id="skills"
      className="py-20 px-6 max-w-5xl mx-auto"
      // ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>

      <div className="space-y-8">
        {skills.map((group: any) => (
          <div key={group.category}>
            <h3 className="text-lg font-semibold mb-2 text-muted-foreground">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill: string) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
// components/SkillBadge.tsx
const SkillBadge = ({ name }: { name: string }) => (
  <span className="bg-muted text-sm px-3 py-1 rounded-full shadow text-muted-foreground border border-gray-600">
    {name}
  </span>
);

export default Skills;
