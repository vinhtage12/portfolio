import { Container } from "@components/Container";
import { Reveal } from "@components/Reveal";
import { SectionHeading } from "@components/SectionHeading";
import { educationEntries } from "@data/education";
import { educationBackgroundUrl } from "@lib/cloudinary";
import { Card, CardDescription, CardTitle } from "@ui/card";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function Education() {
  const t = await getTranslations("education");

  return (
    <section
      id="education"
      className="relative isolate scroll-mt-20 overflow-hidden bg-brand-100/40 py-20 dark:bg-brand-900/10 sm:py-24"
    >
      <Image
        src={educationBackgroundUrl("f_auto,q_auto,c_fill,w_1600,h_900")}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-10 dark:opacity-[0.4]"
      />
      <div className="-z-10 absolute inset-0 bg-linear-to-b from-background/40 via-background/80 to-background" />

      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <div className="mt-10 flex flex-col gap-4">
          {educationEntries.map((entry) => (
            <Reveal key={entry.id}>
              <Card className="bg-card/90 backdrop-blur-sm">
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
