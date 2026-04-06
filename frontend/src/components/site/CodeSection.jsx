import { Code, ExternalLink, Github } from "lucide-react";

import SectionHeading from "@/components/site/SectionHeading";

function CodeSection({ repositories }) {
  return (
    <section id="code" className="py-20 px-4" data-testid="code-section" style={{ backgroundColor: "#10101A" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading icon={Code}>REPOSITORIES</SectionHeading>

        <div className="grid md:grid-cols-2 gap-6">
          {repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`repo-${repo.name}-link`}
              className="hud-panel p-4 border-2 block-shadow-hover group"
              style={{ borderColor: "#00FFFF" }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-lg flex items-center gap-2 group-hover:text-secondary transition-colors" style={{ color: "#00FF41" }}>
                    <Github size={18} />
                    {repo.name}
                  </h3>
                  <p className="font-body text-sm mt-1" style={{ color: "#8892B0" }}>
                    {repo.desc}
                  </p>
                </div>
                <ExternalLink size={16} className="group-hover:text-secondary transition-colors" style={{ color: "#8892B0" }} />
              </div>
              <div className="flex items-center gap-4 mt-4">
                <span className="font-subheading text-sm" style={{ color: "#FFA500" }}>
                  ★ {repo.stars}
                </span>
                <span className="font-subheading text-sm" style={{ color: "#00FFFF" }}>
                  {repo.lang}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CodeSection;
