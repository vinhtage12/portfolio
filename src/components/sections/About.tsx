import { getTranslations } from "next-intl/server";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";

export async function About() {
  const t = await getTranslations("about");
  const tags = t.raw("tags") as string[];

  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("body")}
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
