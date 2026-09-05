"use client";

import { MenuIcon } from "@components/icons";
import { cn } from "@lib/cn";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@ui/sheet";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function MobileNav({
  navItems,
}: {
  navItems: { id: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label={t("toggleMenu")}
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-brand-100 dark:hover:bg-brand-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden",
          )}
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent closeLabel={t("toggleMenu")}>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <SheetClose key={item.id} asChild>
              <a
                href={item.href}
                className="text-lg font-medium text-foreground transition-colors hover:text-accent"
              >
                {t(item.id)}
              </a>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
