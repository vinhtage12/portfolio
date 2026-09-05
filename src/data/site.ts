export const site = {
  name: "Nguyen Tuan Vinh",
  role: "Front End Developer (React)",
  email: "nguyentuanvinh1222@gmail.com",
  phone: "+84 79 319 1854",
  location: "Ho Chi Minh City, Vietnam",
  // Update NEXT_PUBLIC_SITE_URL once the real production domain is known —
  // this fallback is only a placeholder for local builds.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nguyentuanvinh.vercel.app",
  keywords: [
    "Nguyen Tuan Vinh",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Front End Engineer Vietnam",
    "TypeScript Developer",
    "AG Grid",
    "Ho Chi Minh City Developer",
  ],
  links: {
    linkedin: "https://linkedin.com/in/nguyentuanvinh1202",
    cv: "/cv/nguyen-tuan-vinh-cv-en.pdf",
  },
  navItems: [
    { id: "about", href: "#about" },
    { id: "experience", href: "#experience" },
    { id: "skills", href: "#skills" },
    { id: "education", href: "#education" },
    { id: "contact", href: "#contact" },
  ],
} as const;
