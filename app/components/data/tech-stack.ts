import {LucideIcon} from "lucide-react";
import { Code, Smartphone, Database, BadgeCheck, Box, ShieldKeyhole } from 'lucide-react';

type TechStackProps = {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: string[];
};

export const techCategories: TechStackProps[] = [
  {
    title: "Languages",
    icon: Code,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
    skills: ["Kotlin", "Java", "Dart", "JavaScript", "TypeScript", "Swift"],
  },
  {
    title: "Mobile UI",
    icon: Smartphone,
    color: "bg-purple-50 text-purple-600 dark:bg-purple-500/15 dark:text-purple-400",
    skills: [
      "Flutter",
      "Android Native",
      "Jetpack Compose",
      "Kotlin Multiplatform",
      "SwiftUI",
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
    skills: [
      "Spring Boot",
      "Node.js",
      "REST APIs",
      "SQLite",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Testing & Quality",
    icon: BadgeCheck,
    color: "bg-teal-50 text-teal-600 dark:bg-teal-500/15 dark:text-teal-400",
    skills: [
      "JUnit",
      "Mockito / Mockk",
      "Espresso",
      "Playwright",
      "Firebase Test Lab",
      "SonarQube",
      "ktlint",
      "detekt",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Box,
    color: "bg-pink-50 text-pink-600 dark:bg-pink-500/15 dark:text-pink-400",
    skills: ["GitHub Actions", "Fastlane", "Docker", "Firebase", "Monitoring"],
  },
  {
    title: "Security",
    icon: ShieldKeyhole,
    color: "bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-400",
    skills: [
      "OWASP",
      "Encryption",
      "Obfuscation",
      "RASP",
      "DexGuard",
      "Secure Coding Practices",
      "DRM",
    ],
  },
];
