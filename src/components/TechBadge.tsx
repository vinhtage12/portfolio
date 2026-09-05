import { TechIcon } from "@components/TechIcon";
import { cn } from "@lib/cn";

export function TechBadge({
  name,
  title,
  className,
}: {
  name: string;
  title?: string;
  className?: string;
}) {
  return (
    <span
      title={title}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-brand-100 py-1 pr-3 pl-1 text-xs font-medium text-brand-900 dark:bg-brand-900/40 dark:text-brand-100",
        className,
      )}
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-black/10">
        <TechIcon name={name} className="h-3 w-3" />
      </span>
      {name}
    </span>
  );
}
