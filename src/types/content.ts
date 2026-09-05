export type MetricIcon =
  | "users"
  | "database"
  | "list-checks"
  | "clock"
  | "workflow"
  | "layers";

export interface ExperienceMetric {
  icon: MetricIcon;
  value: string;
  labelKey: string;
}

export interface ExperienceProject {
  id: string;
  companyId: string;
  dateRange: { start: string; end: string | "present" };
  techTags: string[];
  metrics: ExperienceMetric[];
  images: string[];
}

export type CategoryIcon =
  | "code"
  | "database"
  | "palette"
  | "server"
  | "wrench";

export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export interface SkillCategory {
  id: string;
  icon: CategoryIcon;
  skills: Skill[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  degreeKey: string;
  startYear: number;
  endYear: number;
}
