export interface ExperienceProject {
  id: string;
  companyId: string;
  dateRange: { start: string; end: string | "present" };
  techTags: string[];
}

export interface SkillCategory {
  id: string;
  items: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  degreeKey: string;
  startYear: number;
  endYear: number;
}
