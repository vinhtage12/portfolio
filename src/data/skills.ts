import type { SkillCategory } from "@type/content";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend-core",
    icon: "code",
    skills: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "AG Grid", level: 5 },
    ],
  },
  {
    id: "data-forms",
    icon: "database",
    skills: [
      { name: "React Hook Form", level: 4 },
      { name: "Yup", level: 4 },
      { name: "TanStack Query", level: 4 },
      { name: "Axios", level: 4 },
    ],
  },
  {
    id: "ui-styling",
    icon: "palette",
    skills: [
      { name: "Tailwind CSS", level: 4 },
      { name: "Material UI", level: 4 },
      { name: "Shadcn/UI", level: 4 },
      { name: "Radix UI", level: 4 },
    ],
  },
  {
    id: "backend-infra",
    icon: "server",
    skills: [
      { name: "Node.js", level: 3 },
      { name: "NestJS", level: 3 },
      { name: "Java Spring Boot", level: 3 },
      { name: "PostgreSQL", level: 3 },
      { name: "MongoDB", level: 3 },
      { name: "Redis", level: 3 },
      { name: "Docker", level: 3 },
      { name: "Nginx", level: 3 },
      { name: "GitHub Actions", level: 3 },
    ],
  },
  {
    id: "tools-methods",
    icon: "wrench",
    skills: [
      { name: "Git", level: 4 },
      { name: "GitHub", level: 4 },
      { name: "Agile / Scrum", level: 4 },
      { name: "Technical English", level: 4 },
    ],
  },
];
