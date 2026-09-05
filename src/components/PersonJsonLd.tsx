import { companies } from "@data/experience";
import { site } from "@data/site";
import { avatarUrl } from "@lib/cloudinary";

export function PersonJsonLd({ locale }: { locale: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: `${site.url}/${locale}`,
    image: avatarUrl("f_auto,q_auto,c_fill,g_face,w_800,h_800"),
    email: `mailto:${site.email}`,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    sameAs: [site.links.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Ho Chi Minh City University of Technology (HCMUT)",
    },
    worksFor: {
      "@type": "Organization",
      name: companies.apollogix.name,
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "AG Grid",
      "TanStack Query",
      "React Hook Form",
      "Tailwind CSS",
      "Radix UI",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: static structured data built from our own site config, no user input
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
