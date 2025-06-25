import Image from "next/image";
import projects from "../../../data/projects.json";
import Link from "next/link";

export default function ProjectsList() {
  const frontend = projects.filter((p) => p.category === "Frontend");
  const fullstack = projects.filter((p) => p.category === "Fullstack");

  return (
    <div className="p-6 space-y-10">
      <ProjectSection title="Frontend Projects" projects={frontend} />
      <ProjectSection title="Fullstack Projects" projects={fullstack} />
    </div>
  );
}

function ProjectSection({ title, projects }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
        {projects.map((p) => (
          <li
            key={p.slug}
            className="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <Link href={`/projects/${p.slug}`} className="block p-2">
              <Image
                src={p.image}
                alt={p.title}
                width={200}
                height={120}
                className="w-full h-[150px] object-cover rounded-sm"
              />
              <p className="text-sm mt-2 text-center font-medium">{p.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
