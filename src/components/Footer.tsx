import { getTranslations } from "next-intl/server";
import { Container } from "@/components/Container";
import { LinkedinIcon, MailIcon } from "@/components/icons";
import { site } from "@/data/site";

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {year} {site.name}. {t("rights")}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            aria-label={site.email}
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">{t("builtWith")}</p>
      </Container>
    </footer>
  );
}
