"use client";

import { CheckIcon, MailIcon } from "@components/icons";
import { cn } from "@lib/cn";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ui/tooltip";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const t = useTranslations("contact");

  return (
    <TooltipProvider>
      <Tooltip open={copied ? true : undefined}>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label={t("copyEmail")}
            onClick={async () => {
              await navigator.clipboard.writeText(email);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-brand-100 dark:hover:bg-brand-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            )}
          >
            {copied ? (
              <CheckIcon className="h-4 w-4" />
            ) : (
              <MailIcon className="h-4 w-4" />
            )}
            {email}
          </button>
        </TooltipTrigger>
        <TooltipContent>{t("emailCopied")}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
