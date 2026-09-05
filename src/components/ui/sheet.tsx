"use client";

import { Dialog as RadixDialog } from "radix-ui";
import { CloseIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

export const Sheet = RadixDialog.Root;
export const SheetTrigger = RadixDialog.Trigger;
export const SheetClose = RadixDialog.Close;

export function SheetContent({
  children,
  className,
  closeLabel,
}: {
  children: React.ReactNode;
  className?: string;
  closeLabel: string;
}) {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm" />
      <RadixDialog.Content
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col gap-6 bg-background p-6 shadow-xl outline-none",
          className,
        )}
      >
        <RadixDialog.Title className="sr-only">Menu</RadixDialog.Title>
        <RadixDialog.Close
          aria-label={closeLabel}
          className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-brand-100 dark:hover:bg-brand-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <CloseIcon className="h-5 w-5" />
        </RadixDialog.Close>
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
}
