"use client";

import { cn } from "@lib/cn";
import { Tooltip as RadixTooltip } from "radix-ui";

export const TooltipProvider = RadixTooltip.Provider;
export const Tooltip = RadixTooltip.Root;
export const TooltipTrigger = RadixTooltip.Trigger;

export function TooltipContent({
  children,
  className,
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof RadixTooltip.Content>) {
  return (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        sideOffset={sideOffset}
        className={cn(
          "z-50 rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background shadow-md",
          className,
        )}
        {...props}
      >
        {children}
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  );
}
