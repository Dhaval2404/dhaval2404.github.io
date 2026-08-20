import { techCategories } from "./data/tech-stack";
import SectionHeading from "./section-heading";

const TITLE = "Tech Stack & Expertise";

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading title={TITLE} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((category) => (
          <article
            key={category.title}
            className="rounded-xl border border-border-light bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
          >
            <div
              className={`mb-4 flex size-10 items-center justify-center rounded-lg ${category.color}`}
            >
             <category.icon/>
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-heading">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-slate-200 bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
