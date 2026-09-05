import type { ExperienceProject } from "@/types/content";

export const experienceProjects: ExperienceProject[] = [
  {
    id: "tms-container",
    companyId: "apollogix",
    dateRange: { start: "2024-08", end: "present" },
    techTags: [
      "React",
      "Next.js",
      "AG Grid",
      "React Hook Form",
      "Yup",
      "TanStack Query",
    ],
  },
  {
    id: "fms",
    companyId: "apollogix",
    dateRange: { start: "2024-08", end: "present" },
    techTags: ["React", "Next.js", "AG Grid", "React Hook Form"],
  },
  {
    id: "workspace",
    companyId: "apollogix",
    dateRange: { start: "2024-08", end: "present" },
    techTags: ["Next.js", "Docker", "GitHub Actions"],
  },
];

export const companies = {
  apollogix: {
    name: "APOLLOGIX Co. Ltd.",
    location: "Ho Chi Minh City, Vietnam",
  },
} as const;
