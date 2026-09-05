"use client";

import { LinkedinIcon, MailIcon, PhoneIcon } from "@components/icons";
import { site } from "@data/site";
import { cn } from "@lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const buttonClass =
  "flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function FloatingActions() {
  const t = useTranslations("floatingActions");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowScrollTop(window.scrollY > 480);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3 sm:right-8 sm:bottom-8">
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col items-end gap-2"
          >
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("linkedin")}
              className={cn(
                buttonClass,
                "bg-card text-foreground ring-1 ring-border hover:bg-brand-100 dark:hover:bg-brand-900/40",
              )}
            >
              <LinkedinIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              aria-label={t("phone")}
              className={cn(
                buttonClass,
                "bg-card text-foreground ring-1 ring-border hover:bg-brand-100 dark:hover:bg-brand-900/40",
              )}
            >
              <PhoneIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label={t("email")}
              className={cn(
                buttonClass,
                "bg-card text-foreground ring-1 ring-border hover:bg-brand-100 dark:hover:bg-brand-900/40",
              )}
            >
              <MailIcon className="h-4.5 w-4.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setContactOpen((open) => !open)}
        aria-label={contactOpen ? t("closeContact") : t("openContact")}
        className={cn(
          buttonClass,
          "bg-accent text-accent-foreground hover:opacity-90",
        )}
      >
        {contactOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </button>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.15 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={t("scrollTop")}
            className={cn(
              buttonClass,
              "bg-card text-foreground ring-1 ring-border hover:bg-brand-100 dark:hover:bg-brand-900/40",
            )}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
