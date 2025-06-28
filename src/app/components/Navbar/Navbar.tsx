"use client"
import React from "react";
import { useRouter } from "next/navigation";
import navLinks from "../../../../data/navLinks.json"
function Navbar() {
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-[#181818] p-8 flex items-center ">
      <div
        className="relative text-8xl font-extrabold text-white select-none font-sans top-[-40px] cursor-pointer"
        onClick={() => router.push("/")}
      >
        <span className="absolute left-0 top-0 text-[#00f2ea] translate-x-1 translate-y-1 z-0 text-7xl">
          J
        </span>{" "}
        {/* Cyan shadow */}
        <span className="absolute left-3 top-2 text-[#fd2155] -translate-x-1 -translate-y-1 z-0 text-7xl">
          J
        </span>{" "}
      </div>
      <ul className="flex gap-12 text-xl w-full justify-center">
        {navLinks.map((link) => (
          <li key={link.id}>
            <button onClick={() => scrollToSection(link.id)}>
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
