import { Container } from "@components/Container";
import { LocaleSwitcher } from "@components/LocaleSwitcher";
import { MobileNav } from "@components/MobileNav";
import { ThemeToggle } from "@components/ThemeToggle";
import { site } from "@data/site";
import { Link } from "@i18n/navigation";
import { getTranslations } from "next-intl/server";

export async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.id)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
          <MobileNav navItems={[...site.navItems]} />
        </div>
      </Container>
    </header>
  );
}
