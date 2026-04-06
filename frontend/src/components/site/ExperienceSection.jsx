import { Briefcase } from "lucide-react";

import SectionHeading from "@/components/site/SectionHeading";

function ExperienceSection({ experiences }) {
  return (
    <section id="experience" className="py-20 px-4" data-testid="experience-section" style={{ backgroundColor: "#05050A" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading icon={Briefcase}>JOURNEY</SectionHeading>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style={{ backgroundColor: "rgba(0,255,255,0.3)" }} />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={`${experience.year}-${experience.title}`}
                className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div
                  className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 neon-glow-green"
                  style={{ backgroundColor: "#00FF41" }}
                />

                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="hud-panel p-6 border-2 block-shadow-hover" style={{ borderColor: "#00FFFF" }}>
                    <span className="font-subheading text-2xl" style={{ color: "#FFA500" }}>
                      {experience.year}
                    </span>
                    <h3 className="font-heading text-xl mt-2" style={{ color: "#E0E0E0" }}>
                      {experience.title}
                    </h3>
                    <p className="font-heading text-sm" style={{ color: "#00FFFF" }}>
                      {experience.company}
                    </p>
                    <p className="font-body mt-2" style={{ color: "#8892B0" }}>
                      {experience.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
