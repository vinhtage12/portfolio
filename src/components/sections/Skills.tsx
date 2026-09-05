import { Container } from "@components/Container";
import { Reveal } from "@components/Reveal";
import { SectionHeading } from "@components/SectionHeading";
import { SkillsChart } from "@components/SkillsChart";
import { TechBadge } from "@components/TechBadge";
import { skillCategories } from "@data/skills";
import { normalizeTechName } from "@lib/tech-icons";
import type { CategoryIcon } from "@type/content";
import { Card } from "@ui/card";
import { Code2, Database, Palette, Server, Wrench } from "lucide-react";
import { getTranslations } from "next-intl/server";

const categoryIcons: Record<CategoryIcon, typeof Code2> = {
  code: Code2,
  database: Database,
  palette: Palette,
  server: Server,
  wrench: Wrench,
};

export async function Skills() {
  const t = await getTranslations("skills");

  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-10 flex flex-col gap-6">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.icon];

            return (
              <Reveal key={category.id} delay={index * 0.06}>
                <Card>
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-accent dark:bg-brand-900/40">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {t(`categories.${category.id}.title`)}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {t(`categories.${category.id}.description`)}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <TechBadge
                            key={skill.name}
                            name={skill.name}
                            title={t(
                              `context.${normalizeTechName(skill.name)}`,
                            )}
                          />
                        ))}
                      </div>
                    </div>

                    <SkillsChart skills={category.skills} />
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
