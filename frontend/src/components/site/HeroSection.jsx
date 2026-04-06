import { BookOpen, Box, Brain, ChevronRight, Cpu, Eye, Rocket, Terminal } from "lucide-react";

import { EnergyBar, ProgressBar } from "@/components/site/DisplayWidgets";

const skillIconMap = {
  Cpu,
  Eye,
  Box,
  Brain,
};

function HeroSection({ personalData, skills, latestLogs, featuredProject, onSectionChange }) {
  const stars = Array.from({ length: 30 }, (_, index) => ({
    left: `${(index * 37) % 100}%`,
    top: `${(index * 23) % 60}%`,
    delay: `${(index * 0.3) % 3}s`,
  }));

  return (
    <section
      className="relative overflow-hidden"
      data-testid="hero-section"
      style={{ backgroundColor: "#05050A", minHeight: "100vh", paddingTop: "80px", paddingBottom: "100px" }}
    >
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <img
          src={personalData.heroImage}
          alt="Portfolio hero background"
          className="w-full h-full object-cover"
          style={{ filter: "contrast(1.2) saturate(0.8) hue-rotate(-10deg)", opacity: 0.4 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #05050A 0%, rgba(5,5,10,0.7) 50%, rgba(5,5,10,0.3) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(5,5,10,0.9) 0%, transparent 70%)" }} />
      </div>

      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{ left: star.left, top: star.top, animationDelay: star.delay, zIndex: 1 }}
        />
      ))}

      <div className="relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl leading-tight mb-2" style={{ color: "#E0E0E0" }}>
              {personalData.headline}
            </h2>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl leading-tight mb-8" style={{ color: "#FFA500" }}>
              {personalData.subheadline}
            </h2>

            <p className="font-body text-lg mb-8 max-w-lg" style={{ color: "#8892B0" }}>
              {personalData.bio}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onSectionChange("projects")}
                data-testid="view-projects-button"
                className="flex items-center gap-2 px-6 py-3 border-2 font-heading text-sm text-white block-shadow-hover block-shadow"
                style={{ backgroundColor: "#FF003C", borderColor: "#FF003C" }}
              >
                <Rocket size={18} />
                VIEW PROJECTS
              </button>
              <button
                onClick={() => onSectionChange("blog")}
                data-testid="read-blog-button"
                className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 font-heading text-sm block-shadow-hover"
                style={{ borderColor: "#00FFFF", color: "#00FFFF" }}
              >
                <BookOpen size={18} />
                READ LOGBOOK
              </button>
            </div>
          </div>
        </div>

        <div className="hidden xl:block absolute right-8 top-12" style={{ zIndex: 15 }}>
          <div className="hud-panel p-4 border-2 float" style={{ borderColor: "#00FF41" }}>
            <p className="font-subheading text-xs mb-1" style={{ color: "#8892B0" }}>
              NEXT OBJECTIVE
            </p>
            <p className="font-heading text-sm" style={{ color: "#00FF41" }}>
              {personalData.nextObjective}
            </p>
            <div className="mt-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full pulse-glow" style={{ backgroundColor: "#00FF41" }} />
              <div className="w-24">
                <EnergyBar level={personalData.energyLevel} />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="hud-panel p-4 border-2" style={{ borderColor: "#00FFFF" }}>
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={16} style={{ color: "#00FFFF" }} />
                <h3 className="font-heading text-xs" style={{ color: "#00FFFF" }}>
                  SYSTEMS ONLINE
                </h3>
                <div className="w-2 h-2 rounded-full pulse-glow ml-auto" style={{ backgroundColor: "#00FF41" }} />
              </div>
              <div className="space-y-3">
                {skills.map((skill) => {
                  const SkillIcon = skillIconMap[skill.icon];

                  return (
                    <div key={skill.name} className="flex items-center gap-3">
                      <SkillIcon size={14} style={{ color: "#00FFFF" }} />
                      <span className="font-subheading text-sm w-24" style={{ color: "#E0E0E0" }}>
                        {skill.name}
                      </span>
                      <div className="flex-1">
                        <ProgressBar value={skill.value} color="#00FF41" />
                      </div>
                      <span className="font-subheading text-sm" style={{ color: "#00FF41" }}>
                        {skill.value}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hud-panel p-4 border-2" style={{ borderColor: "#00FFFF" }}>
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={16} style={{ color: "#FFA500" }} />
                <h3 className="font-heading text-xs" style={{ color: "#FFA500" }}>
                  LATEST LOG
                </h3>
              </div>
              <div className="space-y-2">
                {latestLogs.map((log) => (
                  <p key={log} className="font-subheading text-sm" style={{ color: "#8892B0" }}>
                    {log}
                  </p>
                ))}
              </div>
            </div>

            <div className="hud-panel p-4 border-2" style={{ borderColor: "#00FFFF" }}>
              <p className="font-body text-xs tracking-widest mb-2" style={{ color: "#8892B0" }}>
                FEATURED PROJECT
              </p>
              <div className="relative h-24 mb-3 overflow-hidden border" style={{ borderColor: "rgba(0,255,255,0.3)" }}>
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                  style={{ filter: "contrast(1.1) hue-rotate(80deg) saturate(0.7)" }}
                />
              </div>
              <h4 className="font-heading text-sm mb-1" style={{ color: "#00FFFF" }}>
                {featuredProject.title}
              </h4>
              <p className="font-body text-xs mb-3" style={{ color: "#8892B0" }}>
                {featuredProject.description}
              </p>
              <button
                onClick={() => onSectionChange("projects")}
                data-testid="explore-featured-button"
                className="inline-flex items-center gap-1 font-subheading text-sm transition-colors"
                style={{ color: "#00FF41" }}
              >
                EXPLORE <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
