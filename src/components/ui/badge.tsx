import { cn } from "@lib/cn";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-900 dark:bg-brand-900/40 dark:text-brand-100",
        className,
      )}
    >
      {children}
    </span>
  );
}
