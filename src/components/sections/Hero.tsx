import { getTranslations } from "next-intl/server";
import { Container } from "@/components/Container";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ArrowRightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative overflow-hidden pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-100 via-background to-background dark:from-brand-900/40 dark:via-background dark:to-background"
      />

      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <div className="flex flex-col items-start gap-6">
          <p className="text-base font-medium text-accent">{t("greeting")}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t("name")}
          </h1>
          <p className="text-lg font-medium text-muted-foreground sm:text-xl">
            {t("role")}
          </p>
          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            {t("tagline")}
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={site.links.cv} download>
                {t("ctaPrimary")}
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#contact">
                {t("ctaSecondary")}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <ImagePlaceholder
          label={t("avatarAlt")}
          aspectRatio="square"
          className="mx-auto w-full max-w-sm rounded-3xl lg:max-w-none"
        />
      </Container>
    </section>
  );
}
