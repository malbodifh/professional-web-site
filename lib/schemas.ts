import { BASE_URL, SITE_NAME } from "@/lib/seo";
import { faq } from "@/lib/content";

// ─── Organization ────────────────────────────────────────────────────────────
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/assets/noren-logo-rounded-black.svg`,
    description:
      "Agencia de desarrollo de software a medida en Costa Rica. Creamos sitios web, sistemas internos, automatizaciones y apps móviles para empresas que quieren crecer.",
    areaServed: [
      { "@type": "Country", name: "Costa Rica" },
      { "@type": "Place", name: "América Latina" },
    ],
    knowsAbout: [
      "Desarrollo de software a medida",
      "Desarrollo web para empresas",
      "Automatización de procesos empresariales",
      "Sistemas de gestión a medida",
      "Aplicaciones móviles",
      "E-commerce",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: { "@type": "Language", name: "Spanish" },
      url: "https://wa.me/50685055556",
    },
    sameAs: [],
  };
}

// ─── WebSite ──────────────────────────────────────────────────────────────────
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
    description:
      "Agencia de desarrollo de software a medida en Costa Rica.",
    inLanguage: "es-CR",
  };
}

// ─── FAQPage ──────────────────────────────────────────────────────────────────
export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
