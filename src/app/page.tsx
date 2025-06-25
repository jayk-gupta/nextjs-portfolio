import projects from "../../data/projects.json";
import Link from "next/link";

const featured = projects.filter((p) => p.featured);

export default function Home() {
  return (
    <section>
      <h2>Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {featured.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="border p-4 rounded hover:shadow-md">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/projects" className="text-blue-600 mt-4 inline-block">
        View All Projects →
      </Link>
    </section>
  );
}
