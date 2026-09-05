import { getTranslations } from "next-intl/server";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default async function LocaleNotFound() {
  const t = await getTranslations("notFound");

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-3xl font-semibold text-foreground">{t("title")}</h1>
      <p className="max-w-md text-muted-foreground">{t("description")}</p>
      <Button asChild>
        <Link href="/">{t("backHome")}</Link>
      </Button>
    </Container>
  );
}
