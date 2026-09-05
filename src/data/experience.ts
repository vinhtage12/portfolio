import type { ExperienceProject } from "@type/content";

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
    metrics: [
      { icon: "database", value: "15,000+", labelKey: "records" },
      { icon: "list-checks", value: "50+", labelKey: "fields" },
      { icon: "clock", value: "1 min", labelKey: "accuracy" },
    ],
    images: [
      "porfolio/Screenshot_From_2026-09-05_18-29-10_vaznh8.png",
      "porfolio/Screenshot_From_2026-09-05_18-30-15_nhxqzv.png",
    ],
  },
  {
    id: "fms",
    companyId: "apollogix",
    dateRange: { start: "2024-08", end: "present" },
    techTags: ["React", "Next.js", "AG Grid", "React Hook Form"],
    metrics: [
      { icon: "users", value: "200+", labelKey: "users" },
      { icon: "database", value: "15,000+", labelKey: "records" },
      { icon: "list-checks", value: "70+", labelKey: "fields" },
    ],
    images: [
      "porfolio/Screenshot_From_2026-09-05_18-25-50_nzayhm.png",
      "porfolio/Screenshot_From_2026-09-05_18-26-14_wleda0.png",
    ],
  },
  {
    id: "workspace",
    companyId: "apollogix",
    dateRange: { start: "2024-08", end: "present" },
    techTags: ["Next.js", "Docker", "GitHub Actions"],
    metrics: [
      { icon: "layers", value: "Multi-tenant", labelKey: "architecture" },
      { icon: "workflow", value: "CI/CD", labelKey: "automation" },
    ],
    images: ["porfolio/Screenshot_From_2026-09-05_18-38-58_nap9sz.png"],
  },
];

export const companies = {
  apollogix: {
    name: "APOLLOGIX Co. Ltd.",
    location: "Ho Chi Minh City, Vietnam",
  },
} as const;
