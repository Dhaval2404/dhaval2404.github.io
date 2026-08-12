import { projects } from "./data/projects";
import SectionHeading from "./section-heading";
import Image from "next/image";

const TITLE = "Featured Projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading title={TITLE} dark />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-56 items-center justify-center bg-slate-100">
              {/*<img src={project.image}*/}
              {/*     alt={project.alt}*/}
              {/*     decoding="async"*/}
              {/*     loading="lazy"*/}
              {/*     className="h-full w-full object-cover object-top"/>*/}
              <Image
                src={project.image}
                alt={project.alt}
                width={1200}
                height={800}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="flex grow flex-col p-6">
              <h3 className="mb-2 text-xl font-bold text-slate-900">
                {project.title}
              </h3>
              <p className="grow text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>
              <div className="my-6 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                {project.playStoreUrl && (
                  <a
                    aria-label={`View ${project.title} on Google Play`}
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/google-play.svg"
                      alt=""
                      width="120"
                      height="40"
                    />
                  </a>
                )}
                <a
                  aria-label={`Visit the ${project.title} website`}
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/visit-website.svg"
                    alt=""
                    width="120"
                    height="40"
                  />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
