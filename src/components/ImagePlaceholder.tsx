import { ImageIcon } from "@components/icons";
import { cn } from "@lib/cn";

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
} as const;

export function ImagePlaceholder({
  label,
  icon,
  aspectRatio = "square",
  className,
}: {
  label: string;
  icon?: React.ReactNode;
  aspectRatio?: keyof typeof aspectRatioClasses;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-brand-100/60 text-muted-foreground dark:bg-brand-900/20",
        aspectRatioClasses[aspectRatio],
        className,
      )}
    >
      {icon ?? <ImageIcon className="h-8 w-8 opacity-70" />}
      <span className="px-4 text-center text-xs font-medium">{label}</span>
    </div>
  );
}
