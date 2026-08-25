import { experiences } from "./data/experience";
import SectionHeading from "./section-heading";
import Reveal from "./motion/reveal";

const TITLE = "Work Experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-y border-border-light bg-surface-light py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading title={TITLE} />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-8 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <Reveal
              key={experience.company}
              delay={(index % 2) * 0.08}
              className={`h-full ${experience.wide ? "lg:col-span-2" : ""}`}
            >
              <article
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-border-light bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl dark:bg-slate-900"
              >
                <div className="mb-6 flex flex-col items-start justify-between gap-2 sm:flex-row">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black tracking-tight text-slate-heading">
                      {experience.company}
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-wider text-primary">
                      {experience.role}
                    </p>
                  </div>
                  <p className="whitespace-nowrap rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-left text-sm font-medium text-slate-500 sm:text-right dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-400">
                    {experience.period}
                  </p>
                </div>
                <div className="grow">
                  <p className="mb-4 text-slate-600 dark:text-slate-300">{experience.summary}</p>
                  <ul
                    className={`mb-8 space-y-3 ${experience.wide ? "md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-3 md:space-y-0" : ""}`}
                  >
                    {experience.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 border-t border-slate-50 pt-6 dark:border-slate-800">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
