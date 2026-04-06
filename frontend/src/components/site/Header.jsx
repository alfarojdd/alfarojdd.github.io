function Header({ personalData, onSectionChange }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 hud-panel border-t-0 border-l-0 border-r-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 border-2 overflow-hidden flex items-center justify-center"
            style={{ borderColor: "#00FFFF", backgroundColor: "#1A1A2E" }}
          >
            {personalData.profileImage ? (
              <img
                src={personalData.profileImage}
                alt={personalData.profileImageAlt ?? `${personalData.name} profile photo`}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="font-heading text-sm" style={{ color: "#00FFFF" }}>
                {personalData.initials}
              </span>
            )}
          </div>
          <div>
            <h1 className="font-heading text-sm" style={{ color: "#E0E0E0" }}>
              {personalData.name}
            </h1>
            <p className="font-subheading text-xs" style={{ color: "#8892B0" }}>
              {personalData.title}
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-subheading text-xs" style={{ color: "#8892B0" }}>
              MISSION STATUS
            </span>
            <div
              className="flex items-center gap-1 px-2 py-1 border"
              style={{ borderColor: "#00FF41", backgroundColor: "rgba(0,255,65,0.1)" }}
            >
              <div className="w-2 h-2 rounded-full pulse-glow" style={{ backgroundColor: "#00FF41" }} />
              <span className="font-subheading text-sm" style={{ color: "#00FF41" }}>
                {personalData.missionStatus}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={personalData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-github-link"
            className="px-3 py-1 border font-subheading text-sm hover:border-secondary hover:text-secondary transition-colors"
            style={{ borderColor: "rgba(136,146,176,0.3)", color: "#8892B0" }}
          >
            GITHUB
          </a>
          <a
            href={personalData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-linkedin-link"
            className="px-3 py-1 border font-subheading text-sm hover:border-secondary hover:text-secondary transition-colors"
            style={{ borderColor: "rgba(136,146,176,0.3)", color: "#8892B0" }}
          >
            LINKEDIN
          </a>
          <a
            href={personalData.links.cv}
            data-testid="header-cv-link"
            className="hidden sm:block px-3 py-1 border font-subheading text-sm hover:border-secondary hover:text-secondary transition-colors"
            style={{ borderColor: "rgba(136,146,176,0.3)", color: "#8892B0" }}
          >
            CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
