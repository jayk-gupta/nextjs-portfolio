// app/projects/[slug]/page.tsx

import projects from "../../../../data/projects.json"; // adjust path as needed

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-2">{project.description}</p>
      <p className="text-sm text-gray-600">Category: {project.category}</p>
      <div className="mt-4">
        <a href={project.url} className="text-blue-600" target="_blank">
          Live Demo
        </a>{" "}
        |{" "}
        <a href={project.github} className="text-blue-600" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
}
