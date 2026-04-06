import { ChevronRight } from "lucide-react";

function LogbookPostPage({ post }) {
  return (
    <section className="min-h-screen px-4 pt-28 pb-32" style={{ backgroundColor: "#05050A" }}>
      <div className="max-w-5xl mx-auto">
        <a
          href="#blog"
          className="inline-flex items-center gap-2 mb-8 font-subheading text-sm transition-colors"
          style={{ color: "#00FFFF" }}
        >
          <ChevronRight size={14} style={{ transform: "rotate(180deg)" }} />
          BACK TO LOGBOOK
        </a>

        <article className="hud-panel border-2 overflow-hidden" style={{ borderColor: "#00FFFF" }}>
          <div className="relative h-[320px] md:h-[420px] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              style={{ filter: "contrast(1.05) saturate(0.75)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(5,5,10,0.96) 0%, rgba(5,5,10,0.35) 55%, rgba(5,5,10,0.2) 100%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="font-subheading text-sm mb-3 tracking-[0.3em]" style={{ color: "#FFA500" }}>
                LOGBOOK ENTRY / {post.date}
              </p>
              <h1 className="font-heading text-3xl md:text-5xl max-w-3xl" style={{ color: "#E0E0E0" }}>
                {post.title}
              </h1>
              <p className="font-body text-base md:text-lg mt-4 max-w-2xl" style={{ color: "#8892B0" }}>
                {post.excerpt}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-8 p-6 md:p-10">
            <div className="space-y-8">
              {post.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-heading text-xl mb-3" style={{ color: "#00FFFF" }}>
                    {section.heading}
                  </h2>
                  <p className="font-body leading-7" style={{ color: "#C5D1E6" }}>
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="hud-panel p-5 border-2" style={{ borderColor: "#00FF41" }}>
                <p className="font-subheading text-xs mb-2 tracking-[0.25em]" style={{ color: "#8892B0" }}>
                  ENTRY STATUS
                </p>
                <p className="font-heading text-lg" style={{ color: "#00FF41" }}>
                  RESEARCH NOTES
                </p>
                <p className="font-body text-sm mt-3" style={{ color: "#8892B0" }}>
                  Process notes, tradeoffs, references and results from the work documented in this entry.
                </p>
              </div>

              <div className="hud-panel p-5 border-2" style={{ borderColor: "#00FFFF" }}>
                <p className="font-subheading text-xs mb-3 tracking-[0.25em]" style={{ color: "#8892B0" }}>
                  METADATA
                </p>
                <div className="space-y-3 font-subheading text-sm">
                  <p style={{ color: "#E0E0E0" }}>
                    READ TIME: <span style={{ color: "#00FFFF" }}>{post.readTime}</span>
                  </p>
                  <p style={{ color: "#E0E0E0" }}>
                    SECTION: <span style={{ color: "#00FFFF" }}>LOGBOOK</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 border font-subheading text-xs"
                      style={{ borderColor: "rgba(0,255,65,0.5)", color: "#00FF41" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </section>
  );
}

export default LogbookPostPage;
