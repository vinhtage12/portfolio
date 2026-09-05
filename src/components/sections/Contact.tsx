import { Container } from "@components/Container";
import { CopyEmailButton } from "@components/CopyEmailButton";
import { MapPinIcon, PhoneIcon } from "@components/icons";
import { SectionHeading } from "@components/SectionHeading";
import { site } from "@data/site";
import { Button } from "@ui/button";
import { getTranslations } from "next-intl/server";

export async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <Container className="flex flex-col items-center gap-8 text-center">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          className="mx-auto text-center"
        />

        <div className="flex flex-wrap items-center justify-center gap-3">
          <CopyEmailButton email={site.email} />

          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground">
            <PhoneIcon className="h-4 w-4" />
            {site.phone}
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground">
            <MapPinIcon className="h-4 w-4" />
            {site.location}
          </span>
        </div>

        <Button asChild size="lg">
          <a href={`mailto:${site.email}`}>{t("ctaPrimary")}</a>
        </Button>
      </Container>
    </section>
  );
}
