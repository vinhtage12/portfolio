import {
  siAxios,
  siBiome,
  siDocker,
  siEslint,
  siFigma,
  siGit,
  siGithub,
  siGithubactions,
  siMongodb,
  siMui,
  siNestjs,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPrettier,
  siRadixui,
  siReact,
  siReacthookform,
  siRedis,
  siShadcnui,
  siSpringboot,
  siTailwindcss,
  siTanstack,
  siTypescript,
} from "simple-icons";

export function normalizeTechName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const iconsByNormalizedName: Record<string, { path: string; hex: string }> = {
  react: siReact,
  nextjs: siNextdotjs,
  typescript: siTypescript,
  tailwindcss: siTailwindcss,
  radixui: siRadixui,
  shadcnui: siShadcnui,
  materialui: siMui,
  mui: siMui,
  docker: siDocker,
  git: siGit,
  github: siGithub,
  githubactions: siGithubactions,
  figma: siFigma,
  postman: siPostman,
  eslint: siEslint,
  prettier: siPrettier,
  biome: siBiome,
  axios: siAxios,
  reacthookform: siReacthookform,
  tanstack: siTanstack,
  tanstackquery: siTanstack,
  nodejs: siNodedotjs,
  nestjs: siNestjs,
  springboot: siSpringboot,
  javaspringboot: siSpringboot,
  postgresql: siPostgresql,
  mongodb: siMongodb,
  redis: siRedis,
  nginx: siNginx,
};

export function getTechIcon(name: string) {
  return iconsByNormalizedName[normalizeTechName(name)];
}
