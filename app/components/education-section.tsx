import { educationData, certificationsData } from "./data/education-data";

export default function EducationSection() {
  const education = educationData.items[0];
  const certification = certificationsData.items[0];

  return (
    <section id="education-certs" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl! text-primary">
              {educationData.icon}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-heading">
              {educationData.title}
            </h2>
          </div>
          <article className="rounded-2xl border border-border-light bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
            <h3 className="text-2xl font-bold tracking-tight text-slate-heading">
              {education.degree}
            </h3>
            <p className="mt-3 font-semibold text-primary">
              {education.university}
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-600">
              <span className="material-symbols-outlined text-sm!">
                calendar_today
              </span>
              <span className="">{education.year}</span>
              <span className="size-1 rounded-full bg-slate-300" />
              <span className="">{education.major}</span>
            </p>
          </article>
        </div>
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl! text-primary">
              {certificationsData.icon}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-heading">
              {certificationsData.title}
            </h2>
          </div>
          <article className="relative overflow-hidden rounded-xl border border-border-light bg-white p-8 shadow-sm transition-colors hover:border-primary/30">
            <div className="relative z-10">
              <h3 className="mb-2 text-2xl font-bold text-slate-heading">
                {certification.title}
              </h3>
              <p className="mb-4 font-semibold text-primary">
                {certification.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                {certification.description}
              </p>
            </div>
            <span className="material-symbols-outlined absolute right-8 top-1/2 -translate-y-1/2 text-[120px]! opacity-5">
              {certification.icon}
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}
