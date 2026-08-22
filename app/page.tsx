import AboutSection from "./components/about-section";
import EducationSection from "./components/education-section";
import ExperienceSection from "./components/experience-section";
import HeroSection from "./components/hero-section";
import ProjectsSection from "./components/projects-section";
import TechStackSection from "./components/tech-stack-section";

export default function Home() {
  return (
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
      </main>
  );
}
