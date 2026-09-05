import { Container } from "@components/Container";
import { SectionHeading } from "@components/SectionHeading";
import { ExperienceItem } from "@components/sections/ExperienceItem";
import { experienceProjects } from "@data/experience";
import { getTranslations } from "next-intl/server";

export async function Experience() {
  const t = await getTranslations("experience");

  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-brand-100/40 py-20 dark:bg-brand-900/10 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <p className="mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">
          {t("roleIntro")}
        </p>

        <div className="mt-10 flex flex-col gap-6">
          {experienceProjects.map((project, index) => (
            <ExperienceItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
