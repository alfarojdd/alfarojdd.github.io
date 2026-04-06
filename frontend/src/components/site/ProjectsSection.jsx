import { ExternalLink, Rocket } from "lucide-react";

import SectionHeading from "@/components/site/SectionHeading";

function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="py-20 px-4" data-testid="projects-section" style={{ backgroundColor: "#10101A" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading icon={Rocket}>MISSIONS</SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isExternal = project.href?.startsWith("http");

            return (
              <div
                key={project.id}
                className="hud-panel border-2 block-shadow-hover overflow-hidden group"
                style={{ borderColor: "#00FFFF" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    style={{ filter: "contrast(1.1) saturate(0.8)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #10101A 0%, transparent 60%)" }} />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg mb-2" style={{ color: "#00FFFF" }}>
                    {project.title}
                  </h3>
                  <p className="font-body text-sm mb-4" style={{ color: "#8892B0" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 border font-subheading text-xs"
                        style={{ borderColor: "rgba(0,255,65,0.5)", color: "#00FF41" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    data-testid={`project-${project.id}-link`}
                    className="inline-flex items-center gap-2 font-subheading text-sm transition-colors"
                    style={{ color: "#00FFFF" }}
                  >
                    {project.ctaLabel ?? "VIEW MISSION"} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
