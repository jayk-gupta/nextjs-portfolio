import React from "react";

function Navbar() {
  return (
    <div className="bg-[#181818] p-8 flex items-center ">
      <div className="relative text-8xl font-extrabold text-white select-none font-sans top-[-40px]">
        <span className="absolute left-0 top-0 text-[#00f2ea] translate-x-1 translate-y-1 z-0 text-7xl">
          J
        </span>{" "}
        {/* Cyan shadow */}
        <span className="absolute left-3 top-2 text-[#fd2155] -translate-x-1 -translate-y-1 z-0 text-7xl">
          J
        </span>{" "}
      </div>
      <ul className="flex gap-12 text-xl w-full justify-center">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
