import { User } from "lucide-react";

import SectionHeading from "@/components/site/SectionHeading";

function AboutSection({ aboutContent }) {
  return (
    <section id="about" className="py-20 px-4" data-testid="about-section" style={{ backgroundColor: "#05050A" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading icon={User}>ABOUT ME</SectionHeading>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="hud-panel p-6 border-2" style={{ borderColor: "#00FFFF" }}>
            <h3 className="font-heading text-xl mb-4" style={{ color: "#FFA500" }}>
              MY STORY
            </h3>
            <div className="space-y-4 font-body" style={{ color: "#8892B0" }}>
              {aboutContent.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="terminal p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3" style={{ backgroundColor: "#FF003C" }} />
                <div className="w-3 h-3" style={{ backgroundColor: "#FFA500" }} />
                <div className="w-3 h-3" style={{ backgroundColor: "#00FF41" }} />
                <span className="font-subheading text-xs ml-2" style={{ color: "#00FF41" }}>
                  system_info.sh
                </span>
              </div>
              <div className="font-subheading text-lg space-y-1">
                <p><span style={{ color: "#00FFFF" }}>location:</span> <span style={{ color: "#00FF41" }}>{aboutContent.systemInfo.location}</span></p>
                <p><span style={{ color: "#00FFFF" }}>focus:</span> <span style={{ color: "#00FF41" }}>{aboutContent.systemInfo.focus}</span></p>
                <p><span style={{ color: "#00FFFF" }}>status:</span> <span style={{ color: "#00FF41" }}>{aboutContent.systemInfo.status}</span></p>
                <p><span style={{ color: "#00FFFF" }}>mission:</span> <span style={{ color: "#00FF41" }}>{aboutContent.systemInfo.mission}</span></p>
                <p className="flex items-center">
                  <span style={{ color: "#00FFFF" }}>cursor:</span>
                  <span className="ml-1 w-2 h-4 blink" style={{ backgroundColor: "#00FF41" }} />
                </p>
              </div>
            </div>

            <div className="hud-panel p-4 border-2" style={{ borderColor: "#00FF41" }}>
              <h4 className="font-heading text-sm mb-3" style={{ color: "#00FF41" }}>
                CORE TECHNOLOGIES
              </h4>
              <div className="flex flex-wrap gap-2">
                {aboutContent.coreTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border font-subheading text-sm"
                    style={{ borderColor: "#00FFFF", color: "#00FFFF" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
