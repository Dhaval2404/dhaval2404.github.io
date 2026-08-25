import { SITE_META } from "@/app/lib/site-meta-config";
import { APP_CONFIG } from "@/app/lib/config";
import { expertiseAreas } from "./data/expertise";
import Reveal from "./motion/reveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-y border-border-light bg-surface-light"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-heading">
              Professional Summary
            </h2>
            <p className="text-base leading-relaxed text-slate-body">
              <strong className="text-primary">{SITE_META.JOB_TITLE}</strong>{" "}
              with {APP_CONFIG.YEARS_OF_EXPERIENCE} years of experience
              architecting, leading, and delivering enterprise-grade mobile
              applications across the Banking and Healthcare domains.
              <br />
              <br />
              Extensive experience with Android, Flutter, and Kotlin
              Multiplatform (KMP), including large-scale mobile ecosystems and
              Backbase digital banking platforms.
              <br />
              <br />
              Specialized in Kotlin, Java, Dart, Jetpack Compose, Spring Boot,
              Firebase, Clean Architecture, CI/CD, and Secure Mobile
              Development.
              <br />
              <br />
              Proven track record in Technical Leadership, Solution
              Architecture, Performance Optimization, Code Quality, and
              Mentoring High-Performing Engineering Teams to deliver scalable,
              maintainable, and business-critical solutions.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.08} className="h-full">
              <article
                className="group flex h-full flex-col justify-between rounded-2xl border border-slate-300 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 dark:border-slate-700 dark:bg-slate-900"
              >
                <div
                  className={`mb-6 flex size-12 items-center justify-center rounded-xl ${area.color} transition-colors duration-300 group-hover:bg-primary`}
                >
                  <span className="text-3xl transition-colors group-hover:text-white">
                    <area.icon/>
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-black tracking-tight text-slate-heading">
                  {area.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">
                  {area.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
