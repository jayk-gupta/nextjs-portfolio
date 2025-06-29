"use client";
import React from "react";
import AnimatedSection from "../Motion/AnimatedSection";

function Hero() {
  return (
    <AnimatedSection
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-6"
    >
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold">
        Hi, I'm Jay, a
        <span className="text-gradient ml-2">MERN Stack Developer</span>
      </h1>
      <p className="mt-2 text-lg max-w-xl">
        Passionate about building secure, scalable, and visually engaging web
        apps.
      </p>
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-left">
        <p className="mb-4 text-lg ">
          I'm <strong>Jay Kumar Gupta</strong>, a Compute Science graduate and
          full-stack web developer passionate about crafting seamless digital
          experiences using the MERN stack.
        </p>
        <p className="mb-4 text-lg ">
          I've worked on real-world projects, built scalable REST APIs, and
          developed clean UIs with React, Tailwind, and TypeScript. I recently
          interned at Rynex Consultancy, where I built admin dashboards with RTK
          Query and ShadCN UI.
        </p>
        <p className="mb-4 text-lg ">
          I’m currently focused on refining my skills in DSA, exploring
          AI-powered tools, and contributing to open-source.
        </p>
      </section>
    </AnimatedSection>
  );
}

export default Hero;
