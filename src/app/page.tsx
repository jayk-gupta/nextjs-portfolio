import About from "./components/HomePage/About";
import Contact from "./components/HomePage/Contact";
import FeaturedProjects from "./components/HomePage/FeaturedProjects";
import Hero from "./components/HomePage/Hero";
import Skills from "./components/HomePage/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </div>
  );
}
