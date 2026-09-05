import { Container } from "@components/Container";
import { Reveal } from "@components/Reveal";
import { SectionHeading } from "@components/SectionHeading";
import { educationEntries } from "@data/education";
import { Card, CardDescription, CardTitle } from "@ui/card";
import { getTranslations } from "next-intl/server";

export async function Education() {
  const t = await getTranslations("education");

  return (
    <section
      id="education"
      className="scroll-mt-20 bg-brand-100/40 py-20 dark:bg-brand-900/10 sm:py-24"
    >
      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <div className="mt-10 flex flex-col gap-4">
          {educationEntries.map((entry) => (
            <Reveal key={entry.id}>
              <Card>
                <CardTitle>{entry.institution}</CardTitle>
                <CardDescription className="mt-1">
                  {t(`degree.${entry.degreeKey}`)} · {entry.startYear} –{" "}
                  {entry.endYear}
                </CardDescription>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
