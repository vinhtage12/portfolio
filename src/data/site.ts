export const site = {
  name: "Nguyen Tuan Vinh",
  role: "Front End Developer (React)",
  // Personal contact details live only in .env (see .env.example) and are
  // never committed. The fallbacks below are deliberately generic
  // placeholders, not real data, so a clone without .env still builds and
  // renders something obviously-unconfigured instead of undefined/crashing.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "you@example.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+00 00 000 0000",
  location: process.env.NEXT_PUBLIC_CONTACT_LOCATION ?? "City, Country",
  // Update NEXT_PUBLIC_SITE_URL once the real production domain is known —
  // this fallback is only a placeholder for local builds.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com",
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
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ??
      "https://linkedin.com/in/your-handle",
    cv:
      process.env.NEXT_PUBLIC_CV_URL ??
      "https://drive.google.com/uc?export=download&id=your-file-id",
  },
  navItems: [
    { id: "about", href: "#about" },
    { id: "experience", href: "#experience" },
    { id: "skills", href: "#skills" },
    { id: "education", href: "#education" },
    { id: "contact", href: "#contact" },
  ],
} as const;
