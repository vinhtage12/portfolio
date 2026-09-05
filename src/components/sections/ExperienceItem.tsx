import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { companies } from "@/data/experience";
import type { ExperienceProject } from "@/types/content";

export async function ExperienceItem({
  project,
  index,
}: {
  project: ExperienceProject;
  index: number;
}) {
  const t = await getTranslations(`experience.${project.id}`);
  const tExperience = await getTranslations("experience");
  const achievements = t.raw("achievements") as string[];
  const company = companies[project.companyId as keyof typeof companies];

  return (
    <Reveal delay={index * 0.1}>
      <Card>
        <CardHeader>
          <p className="text-sm font-medium text-accent">
            {company.name} — {tExperience("companyTagline")}
          </p>
          <CardTitle>{t("title")}</CardTitle>
          <p className="text-sm text-muted-foreground">{t("subtitle")}</p>
          <p className="text-xs text-muted-foreground">
            {project.dateRange.start} —{" "}
            {project.dateRange.end === "present"
              ? tExperience("present")
              : project.dateRange.end}
          </p>
        </CardHeader>

        <CardContent>
          <ul className="flex flex-col gap-2.5">
            {achievements.map((achievement) => (
              <li
                key={achievement}
                className="relative pl-4 text-sm leading-6 text-foreground before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
              >
                {achievement}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techTags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
}
