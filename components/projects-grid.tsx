import { Rocket } from "lucide-react";
import { ProjectCard } from "./project-card";
import type { Project } from "@/lib/types";

export async function ProjectsGrid() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`
      : "http://localhost:3000/api/projects",
    { cache: "no-store" }
  ).catch(() => null);

  // Fall back to the in-memory mock if the fetch fails (e.g. during static
  // analysis). Keeps the page render robust whatever the workshop is doing.
  let projects: Project[] = [];
  if (res?.ok) {
    const data = await res.json();
    projects = data.projects ?? [];
  } else {
    const mod = await import("@/lib/mocks/projects");
    projects = mod.projects;
  }

  return (
    <section id="projects" className="py-16">
      <div className="container-narrow">
        <header className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-signal-orange">
              <Rocket className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-[0.18em]">
                live wall
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What's shipping right now
            </h2>
            <p className="mt-1 max-w-xl text-sm text-ink-300">
              Updated as teams submit. Tap a project to upvote — top three at
              23:59 walk out with the prize pool.
            </p>
          </div>
          <span className="hidden font-mono text-xs uppercase tracking-wider text-ink-400 md:inline">
            {projects.length} submissions
          </span>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
