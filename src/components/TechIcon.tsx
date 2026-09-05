import { cn } from "@lib/cn";
import { getTechIcon } from "@lib/tech-icons";
import { Blocks } from "lucide-react";

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const icon = getTechIcon(name);

  if (!icon) {
    // Fixed neutral, not the theme-variable muted-foreground: this icon always
    // sits on an always-white chip (see TechBadge), regardless of site theme.
    return (
      <Blocks aria-hidden="true" className={cn("text-slate-400", className)} />
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      className={className}
      fill={`#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  );
}
