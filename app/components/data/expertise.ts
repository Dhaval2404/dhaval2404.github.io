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
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Mobile",
    description: "Android, iOS, Flutter, Kotlin Multiplatform",
    icon: Smartphone,
    color: "bg-violet-50 text-purple-600",
  },
  {
    title: "Domain",
    description: "Banking, Healthcare",
    icon: Layers,
    color: "bg-emerald-50 text-emerald-600",
  },
];
