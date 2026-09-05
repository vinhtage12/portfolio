import { MetricStat } from "@components/MetricStat";
import { Reveal } from "@components/Reveal";
import { TechBadge } from "@components/TechBadge";
import { companies } from "@data/experience";
import { cloudinaryUrl } from "@lib/cloudinary";
import type { ExperienceProject } from "@type/content";
import { Card } from "@ui/card";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function ExperienceItem({
  project,
  index,
}: {
  project: ExperienceProject;
  index: number;
}) {
  const t = await getTranslations(`experience.${project.id}`);
  const tExperience = await getTranslations("experience");
  const solution = t.raw("solution") as string[];
  const company = companies[project.companyId as keyof typeof companies];

  return (
    <Reveal delay={index * 0.1}>
      <Card className="overflow-hidden p-0 sm:p-0">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="flex flex-col gap-3 border-border border-b bg-brand-100/40 p-6 dark:bg-brand-900/10 sm:p-8 lg:border-r lg:border-b-0">
            {project.images.map((publicId, i) => (
              <div
                key={publicId}
                className="relative aspect-video overflow-hidden rounded-2xl border border-border"
              >
                <Image
                  src={cloudinaryUrl(publicId, "f_auto,q_auto,c_fill,w_960")}
                  alt={tExperience("screenshotAlt", {
                    title: t("title"),
                    index: i + 1,
                  })}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 p-6 sm:p-8">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-accent">
                {company.name} — {tExperience("companyTagline")}
              </p>
              <h3 className="text-lg font-semibold text-foreground">
                {t("title")}
              </h3>
              <p className="text-sm text-muted-foreground">{t("subtitle")}</p>
              <p className="text-xs text-muted-foreground">
                {project.dateRange.start} —{" "}
                {project.dateRange.end === "present"
                  ? tExperience("present")
                  : project.dateRange.end}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <MetricStat
                  key={metric.labelKey}
                  icon={metric.icon}
                  value={metric.value}
                  label={tExperience(`metrics.${metric.labelKey}`)}
                />
              ))}
            </div>

            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {tExperience("problemLabel")}
              </p>
              <p className="text-sm leading-6 text-foreground">
                {t("problem")}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {tExperience("solutionLabel")}
              </p>
              <ul className="flex flex-col gap-2.5">
                {solution.map((step) => (
                  <li
                    key={step}
                    className="relative pl-4 text-sm leading-6 text-foreground before:absolute before:top-2.5 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-1.5 rounded-xl border-accent border-l-4 bg-brand-100/40 p-4 dark:bg-brand-900/20">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {tExperience("resultLabel")}
              </p>
              <p className="text-sm leading-6 text-foreground">{t("result")}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techTags.map((tag) => (
                <TechBadge key={tag} name={tag} />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}
