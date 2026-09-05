import type { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  { id: "frontend", items: ["React", "Next.js", "TypeScript"] },
  {
    id: "ui-engineering",
    items: ["Material UI", "Tailwind CSS", "Shadcn/UI", "Radix UI"],
  },
  {
    id: "data",
    items: ["AG Grid", "React Hook Form", "TanStack Query", "Yup", "Axios"],
  },
  {
    id: "tooling",
    items: ["Git", "GitHub", "Figma", "Postman", "ESLint", "Prettier", "Biome"],
  },
  {
    id: "professional",
    items: [
      "Agile / Scrum",
      "English (TOEIC 785)",
      "Team Collaboration",
      "Technical Research",
    ],
  },
];
