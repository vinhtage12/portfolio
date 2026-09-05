"use client";

import type { Skill } from "@type/content";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export function SkillsChart({ skills }: { skills: Skill[] }) {
  return (
    <div style={{ height: skills.length * 34 + 16 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={skills}
          layout="vertical"
          margin={{ top: 0, right: 24, bottom: 0, left: 0 }}
        >
          <CartesianGrid
            horizontal={false}
            strokeDasharray="3 3"
            stroke="var(--color-border)"
          />
          <XAxis
            type="number"
            domain={[0, 5]}
            ticks={[0, 1, 2, 3, 4, 5]}
            tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={130}
            tick={{ fill: "var(--color-foreground)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Bar
            dataKey="level"
            radius={4}
            barSize={12}
            fill="var(--color-accent)"
          >
            <LabelList
              dataKey="level"
              position="right"
              fill="var(--color-muted-foreground)"
              fontSize={11}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
