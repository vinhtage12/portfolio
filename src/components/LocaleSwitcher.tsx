"use client";

import { GlobeIcon } from "@components/icons";
import { usePathname, useRouter } from "@i18n/navigation";
import { routing } from "@i18n/routing";
import { cn } from "@lib/cn";
import { useLocale, useTranslations } from "next-intl";

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  const nextLocale = routing.locales.find((candidate) => candidate !== locale);

  return (
    <button
      type="button"
      aria-label={t("switchLanguage")}
      onClick={() => {
        if (nextLocale) {
          router.replace(pathname, { locale: nextLocale });
        }
      }}
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-3 text-sm font-medium text-foreground transition-colors hover:bg-brand-100 dark:hover:bg-brand-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <GlobeIcon className="h-4 w-4" />
      {locale.toUpperCase()}
    </button>
  );
}
