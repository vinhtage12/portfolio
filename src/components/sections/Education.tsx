import { Container } from "@components/Container";
import { Reveal } from "@components/Reveal";
import { SectionHeading } from "@components/SectionHeading";
import { educationEntries } from "@data/education";
import { cloudinaryUrl, educationBackgroundUrl } from "@lib/cloudinary";
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
              <Card className="flex flex-row items-center gap-5 bg-card/90 backdrop-blur-sm">
                {entry.logoPublicId ? (
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-border sm:h-16 sm:w-16">
                    <Image
                      src={cloudinaryUrl(entry.logoPublicId, "f_auto,q_auto")}
                      alt={entry.institution}
                      fill
                      sizes="64px"
                      className="object-contain p-2"
                    />
                  </div>
                ) : null}

                <div>
                  <CardTitle>{entry.institution}</CardTitle>
                  <CardDescription className="mt-1">
                    {t(`degree.${entry.degreeKey}`)} · {entry.startYear} –{" "}
                    {entry.endYear}
                  </CardDescription>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
