import { useEffect, useState } from "react";

import "@/App.css";
import AboutSection from "@/components/site/AboutSection";
import BlogSection from "@/components/site/BlogSection";
import BottomNav from "@/components/site/BottomNav";
import CodeSection from "@/components/site/CodeSection";
import ExperienceSection from "@/components/site/ExperienceSection";
import Header from "@/components/site/Header";
import HeroSection from "@/components/site/HeroSection";
import LogbookPostPage from "@/components/site/LogbookPostPage";
import ProjectsSection from "@/components/site/ProjectsSection";
import {
  aboutContent,
  featuredProjectConfig,
  journeyEntries,
  latestLogs,
  logbookPosts,
  missions,
  navigationItems,
  personalData,
  repositories,
  systemsOnline,
} from "@/content";
import { getLogbookSlugFromHash, getSectionIdFromHash } from "@/lib/siteNavigation";

const readInitialHash = () => (typeof window === "undefined" ? "" : window.location.hash);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function App() {
  const [activeSection, setActiveSection] = useState(() => getSectionIdFromHash(readInitialHash()) || "home");
  const [activeLogbookSlug, setActiveLogbookSlug] = useState(() => getLogbookSlugFromHash(readInitialHash()));

  useEffect(() => {
    const syncViewWithHash = () => {
      const currentHash = window.location.hash;
      const logbookSlug = getLogbookSlugFromHash(currentHash);

      if (logbookSlug) {
        setActiveLogbookSlug(logbookSlug);
        setActiveSection("blog");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      setActiveLogbookSlug(null);

      const sectionId = getSectionIdFromHash(currentHash);
      if (!sectionId) {
        setActiveSection("home");
        return;
      }

      setActiveSection(sectionId);

      window.requestAnimationFrame(() => {
        scrollToSection(sectionId);
      });
    };

    syncViewWithHash();
    window.addEventListener("hashchange", syncViewWithHash);

    return () => window.removeEventListener("hashchange", syncViewWithHash);
  }, []);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);

    if (window.location.hash !== `#${sectionId}`) {
      window.location.hash = sectionId;
      return;
    }

    scrollToSection(sectionId);
  };

  const activeLogbookPost = logbookPosts.find((post) => post.slug === activeLogbookSlug);
  const featuredProject = missions.find((mission) => mission.id === featuredProjectConfig.missionId) ?? missions[0];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#05050A", color: "#E0E0E0" }}>
      <Header personalData={personalData} onSectionChange={handleSectionChange} />

      <main>
        {activeLogbookPost ? (
          <LogbookPostPage post={activeLogbookPost} />
        ) : (
          <>
            <HeroSection
              personalData={personalData}
              skills={systemsOnline}
              latestLogs={latestLogs}
              featuredProject={featuredProject}
              onSectionChange={handleSectionChange}
            />
            <AboutSection aboutContent={aboutContent} />
            <ProjectsSection projects={missions} />
            <BlogSection logbookPosts={logbookPosts} />
            <CodeSection repositories={repositories} />
            <ExperienceSection experiences={journeyEntries} />
          </>
        )}
      </main>

      <BottomNav
        activeSection={activeSection}
        navigationItems={navigationItems}
        onSectionChange={handleSectionChange}
      />

      <div className="h-24" />
    </div>
  );
}

export default App;
