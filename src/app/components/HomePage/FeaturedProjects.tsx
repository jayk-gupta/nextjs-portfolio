"use client";
import React from "react";

import projects from "@/data/projects.json";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "../Motion/AnimatedSection";

const featured = projects.filter((p) => p.featured);
function FeaturedProjects() {
  return (
    <AnimatedSection id="skills " className="border  border-white">
      <h2>Featured Projects</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
        {featured.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <Image
              src={p.image}
              alt={p.title}
              width={200}
              height={120}
              className="w-full h-[150px] object-cover rounded-sm"
            />
            <p className="text-sm mt-2 text-center font-medium">{p.title}</p>
          </Link>
        ))}
      </ul>
      <Link href="/projects" className="text-blue-600 mt-4 inline-block">
        View All Projects →
      </Link>
    </AnimatedSection>
  );
}

export default FeaturedProjects;
