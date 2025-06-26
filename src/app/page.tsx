import About from "./components/HomePage/About";
import Contact from "./components/HomePage/Contact";
import Hero from "./components/HomePage/Hero";
import Skills from "./components/HomePage/Skills";
import ProjectsList from "./projects/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <ProjectsList />
      <Contact />
    </div>
  );
}
