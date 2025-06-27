import React from "react";
import skills from "@/data/skills.json";

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
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
    </section>
  );
}
// components/SkillBadge.tsx
const SkillBadge = ({ name }: { name: string }) => (
  <span className="bg-muted text-sm px-3 py-1 rounded-full shadow text-muted-foreground border border-gray-600">
    {name}
  </span>
);

export default Skills;
