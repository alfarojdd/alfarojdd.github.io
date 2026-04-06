import { BookOpen, Briefcase, Code, Rocket, User } from "lucide-react";

const iconMap = {
  User,
  Rocket,
  BookOpen,
  Code,
  Briefcase,
};

function BottomNav({ activeSection, navigationItems, onSectionChange }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 hud-panel border-b-0 border-l-0 border-r-0">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between py-2">
          <span className="hidden lg:block font-subheading text-xs" style={{ color: "#8892B0" }}>
            VERSION 1.0.0
          </span>

          <div className="flex items-center justify-center flex-1 lg:flex-none gap-1 md:gap-4">
            {navigationItems.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  data-testid={`nav-${item.id}-link`}
                  className="flex flex-col items-center px-2 md:px-4 py-2 transition-colors"
                  style={{ color: activeSection === item.id ? "#00FFFF" : "#8892B0" }}
                >
                  <Icon size={20} />
                  <span className="font-heading text-[10px] md:text-xs mt-1">{item.label}</span>
                  <span className="hidden md:block font-subheading text-[10px]" style={{ color: "#8892B0" }}>
                    {item.sublabel}
                  </span>
                </button>
              );
            })}
          </div>

          <span className="hidden lg:block font-subheading text-xs" style={{ color: "#8892B0" }}>
            LET&apos;S BUILD THE NEXT MISSION. TOGETHER.
          </span>
        </div>
      </div>
    </nav>
  );
}

export default BottomNav;
