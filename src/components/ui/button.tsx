import { cn } from "@lib/cn";
import { Slot } from "radix-ui";
import type { ButtonHTMLAttributes } from "react";

const variantClasses = {
  primary:
    "bg-accent text-accent-foreground hover:opacity-90 focus-visible:ring-ring",
  secondary:
    "bg-transparent text-foreground border border-border hover:bg-brand-100/60 dark:hover:bg-brand-900/30 focus-visible:ring-ring",
  ghost:
    "bg-transparent text-foreground hover:bg-brand-100/60 dark:hover:bg-brand-900/30 focus-visible:ring-ring",
  link: "bg-transparent text-accent underline-offset-4 hover:underline p-0 h-auto",
} as const;

const sizeClasses = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        variant !== "link" ? sizeClasses[size] : undefined,
        className,
      )}
      {...props}
    />
  );
}
