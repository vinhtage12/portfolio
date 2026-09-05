import { getTranslations } from "next-intl/server";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.08}>
              <Card>
                <CardTitle>{t(`categories.${category.id}`)}</CardTitle>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
