import type { MetricIcon } from "@type/content";
import {
  Clock,
  Database,
  Layers,
  ListChecks,
  Users,
  Workflow,
} from "lucide-react";

const metricIcons: Record<MetricIcon, typeof Users> = {
  users: Users,
  database: Database,
  "list-checks": ListChecks,
  clock: Clock,
  workflow: Workflow,
  layers: Layers,
};

export function MetricStat({
  icon,
  value,
  label,
}: {
  icon: MetricIcon;
  value: string;
  label: string;
}) {
  const Icon = metricIcons[icon];

  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
      <Icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
      <div className="flex flex-col leading-tight">
        <span className="text-base font-semibold text-foreground">{value}</span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}
