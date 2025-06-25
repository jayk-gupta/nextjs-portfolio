import projects from "../../../data/projects.json";
import Link from "next/link";

export default function ProjectsList() {
  const frontend = projects.filter((p) => p.category === "Frontend");
  const fullstack = projects.filter((p) => p.category === "Fullstack");

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Frontend Projects</h2>
      <ul>
        {frontend.map((p) => (
          <li key={p.slug}>
            <Link href={`/projects/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Fullstack Projects</h2>
      <ul>
        {fullstack.map((p) => (
          <li key={p.slug}>
            <Link href={`/projects/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
