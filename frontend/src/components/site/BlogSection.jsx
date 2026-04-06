import { BookOpen, ChevronRight } from "lucide-react";

import SectionHeading from "@/components/site/SectionHeading";

function BlogSection({ logbookPosts }) {
  return (
    <section id="blog" className="py-20 px-4" data-testid="blog-section" style={{ backgroundColor: "#05050A" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading icon={BookOpen}>LOGBOOK</SectionHeading>

        <div className="space-y-4">
          {logbookPosts.map((post) => (
            <a
              key={post.slug}
              href={`#logbook/${post.slug}`}
              data-testid={`logbook-${post.slug}-link`}
              className="block hud-panel p-6 border-2 block-shadow-hover group"
              style={{ borderColor: "#00FFFF" }}
            >
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <span className="font-subheading text-2xl" style={{ color: "#FFA500" }}>
                    {post.date}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl mb-2 group-hover:text-secondary transition-colors" style={{ color: "#E0E0E0" }}>
                    {post.title}
                  </h3>
                  <p className="font-body" style={{ color: "#8892B0" }}>
                    {post.excerpt}
                  </p>
                </div>
                <ChevronRight className="group-hover:translate-x-2 transition-transform" style={{ color: "#00FFFF" }} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
