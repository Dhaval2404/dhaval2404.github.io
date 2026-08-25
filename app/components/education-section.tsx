import {certificationsData, educationData} from "./data/education-data";
import {BookOpenText, Calendar } from "lucide-react";
import {WorkspacePremiumIcon} from "@/app/components/icons";
import Reveal from "./motion/reveal";

export default function EducationSection() {
  return (
    <section id="education-certs" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal className="space-y-8">
          <div className="mb-8 flex items-center gap-3">
            <span className="text-primary">
              <BookOpenText className="size-8" />
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-heading">
              {educationData.title}
            </h2>
          </div>
          <div className="space-y-6">
            {educationData.items.map((education) => (
              <article
                key={education.degree}
                className="rounded-2xl border border-border-light bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl dark:bg-slate-900"
              >
                <h3 className="text-2xl font-bold tracking-tight text-slate-heading">
                  {education.degree}
                </h3>
                <p className="mt-3 font-semibold text-primary">
                  {education.university}
                </p>
                <p className="mt-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="text-sm!">
                   <Calendar className="size-4" />
                  </span>
                  <span className="">{education.year}</span>
                  <span className="size-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <span className="">{education.major}</span>
                </p>
              </article>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mb-8 flex items-center gap-3">
            <span className="text-primary">
              <WorkspacePremiumIcon className="size-9" />
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-heading">
              {certificationsData.title}
            </h2>
          </div>
          <div className="space-y-6">
            {certificationsData.items.map((certification) => (
              <article
                key={certification.title}
                className="relative overflow-hidden rounded-xl border border-border-light bg-white p-8 shadow-sm transition-colors hover:shadow-xl dark:bg-slate-900"
              >
                <div className="relative z-10">
                  <h3 className="mb-2 text-2xl font-bold text-slate-heading">
                    {certification.title}
                  </h3>
                  <p className="mb-4 font-semibold text-primary">
                    {certification.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {certification.description}
                  </p>
                </div>
                <span className="absolute right-8 top-1/2 -translate-y-1/2 opacity-5">
                  <WorkspacePremiumIcon className="size-30" />
                </span>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
