import {Server, Smartphone, Layers, LucideIcon} from "lucide-react";

type ExpertiseProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
};

export const expertiseAreas: ExpertiseProps[] = [
  {
    title: "Backend",
    description: "Spring Boot, Node.js, Firebase",
    icon: Server,
    color: "bg-blue-50",
  },
  {
    title: "Mobile",
    description: "Android, iOS, Flutter, Kotlin Multiplatform",
    icon: Smartphone,
    color: "bg-purple-50  text-purple-600",
  },
  {
    title: "Domain",
    description: "Banking, Healthcare",
    icon: Layers,
    color: "bg-teal-50",
  },
];
