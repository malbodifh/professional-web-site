export interface Cta {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ClientLogo {
  name: string;
  file: string;
}

export interface FeatureCard {
  title: string;
  body: string;
}

export interface ComparisonRow {
  useCase: string;
  others: string;
  noren: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  context: string;
  logo: string;
  logoClassName?: string;
}

export interface Step {
  step: number;
  title: string;
  body: string;
}

export interface UseCase {
  role: string;
  title: string;
  bullets: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  href: string;
  image: string; // ruta en /assets (o vacío para placeholder)
}

const whatsapp = {
  call: "https://wa.me/50685055556?text=Hola%20noren%2C%20quiero%20agendar%20una%20llamada.",
  quote: "https://wa.me/50685055556?text=Hola%20noren%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n.",
  project: "https://wa.me/50685055556?text=Hola%20noren%2C%20quiero%20contarles%20sobre%20mi%20proyecto.",
};

// Slogan / tagline de marca
export const slogan = "Tu idea, hecha software.";

export const nav = {
  links: [
    { label: "Servicios", href: "#product" },
    { label: "Proceso", href: "#solutions" },
    { label: "Comparativa", href: "#compare" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Preguntas", href: "#resources" },
  ],
  primaryCta: { label: "Agenda una llamada", href: whatsapp.call },
  secondaryCta: { label: "Cotizar", href: whatsapp.quote },
};

export const trustBadges: string[] = [
  "100% a medida",
  "Soporte continuo",
  "Sin plantillas",
];

export const hero = {
  titleLead: "Software a medida para automatizar y",
  titleAccent: "crecer.",
  subtitle:
    "Creamos software y sitios web a medida para empresas: captamos clientes, automatizamos procesos y hacemos crecer tu operación.",
  primaryCta: { label: "Agenda una llamada", href: whatsapp.call },
  secondaryCta: { label: "Solicita cotización", href: whatsapp.quote },
  socialProof: "Software a medida para empresas que quieren crecer",
};

// TODO: reemplazar con logos reales de clientes
export const clientLogos: ClientLogo[] = [
  { name: "Cliente", file: "/assets/squibler.svg" },
  { name: "Cliente", file: "/assets/true-classic.svg" },
  { name: "Cliente", file: "/assets/accel.svg" },
  { name: "Cliente", file: "/assets/ridge.svg" },
  { name: "Cliente", file: "/assets/lyfefuel.svg" },
];

export const featureCards: FeatureCard[] = [
  {
    title: "Software 100% a medida",
    body: "Nada de plantillas. Diseñamos y construimos cada sistema según tu operación, tus procesos y tus objetivos.",
  },
  {
    title: "Enfocado en resultados",
    body: "Creamos software y sitios web pensados para captar clientes y aumentar tus ventas, no solo para verse bien.",
  },
  {
    title: "Automatización y eficiencia",
    body: "Eliminamos tareas manuales y conectamos tus herramientas para que tu equipo trabaje más rápido y sin errores.",
  },
];

export const comparison = {
  heading: "noren vs contratar in-house",
  subheading:
    "Montar un equipo interno toma meses y cuesta caro todo el año. Con noren obtienes el resultado sin el riesgo.",
  columns: ["Caso", "Equipo in-house", "noren"],
  rows: [
    {
      useCase: "Costo",
      others: "Sueldos, prestaciones y herramientas fijas todo el año.",
      noren: "Pagas por proyecto. Inviertes solo en lo que necesitas.",
    },
    {
      useCase: "Tiempo de arranque",
      others: "Reclutar y formar un equipo toma meses.",
      noren: "Arrancamos en días, con un equipo ya listo.",
    },
    {
      useCase: "Riesgo",
      others: "Si el proyecto se atrasa, el costo fijo sigue corriendo.",
      noren: "Alcance, entregables y precio claros desde la propuesta.",
    },
    {
      useCase: "Soporte",
      others: "Dependes de que tu personal clave no rote.",
      noren: "Mantenimiento y soporte continuo de todo nuestro equipo.",
    },
  ],
};

// Comentarios asociados a proyectos reales y MVPs del portafolio.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Construimos una experiencia pensada para transmitir el destino desde el primer vistazo y facilitar reservas directas sin intermediarios.",
    name: "Villas Bahía Salinas",
    context: "Sitio web de reservas directas",
    logo: "/assets/villas-bahia-salinas-logo.png",
  },
  {
    quote:
      "El MVP nos permitió validar una dirección visual intensa, una propuesta clara y una experiencia enfocada en conversiones por WhatsApp.",
    name: "EnForma Gimnasio",
    context: "MVP de landing page para gimnasio premium",
    logo: "/assets/enforma-logo.png",
    logoClassName: "bg-ink p-2.5",
  },
];

export const howItWorks = {
  heading: "Cómo trabajamos",
  steps: [
    {
      step: 1,
      title: "Idea",
      body: "Nos cuentas tu necesidad u objetivo. Analizamos tu caso y definimos juntos el alcance del proyecto.",
    },
    {
      step: 2,
      title: "Prototipo",
      body: "Diseñamos la solución y te mostramos un prototipo para validar la dirección antes de construir.",
    },
    {
      step: 3,
      title: "Desarrollo",
      body: "Construimos, lanzamos y te acompañamos con soporte y mantenimiento continuo.",
    },
  ],
};

export const useCases = {
  heading: "Lo que construimos",
  items: [
    {
      role: "Sitios web",
      title: "Webs a medida que captan clientes",
      bullets: [
        "Landing pages y sitios corporativos",
        "Optimizados para SEO y velocidad",
        "Formularios y captación de leads",
        "Integración con tus herramientas",
      ],
    },
    {
      role: "Sistemas internos",
      title: "Sistemas de gestión a tu medida",
      bullets: [
        "Paneles y CRMs personalizados",
        "Control de inventario, ventas y clientes",
        "Reportes y métricas en tiempo real",
        "Accesos por roles y permisos",
      ],
    },
    {
      role: "Automatización",
      title: "Automatización de procesos",
      bullets: [
        "Eliminamos tareas repetitivas",
        "Integraciones entre tus aplicaciones",
        "Flujos automáticos y notificaciones",
        "Más eficiencia, menos errores",
      ],
    },
    {
      role: "Apps y e-commerce",
      title: "Apps móviles y tiendas online",
      bullets: [
        "Apps a medida para iOS y Android",
        "Tiendas online y pasarelas de pago",
        "Experiencia rápida y moderna",
        "Escalable según tu crecimiento",
      ],
    },
  ],
};

// Sección reconvertida en CTA de contacto (mismo layout que la sección "Ask")
export const askAI = {
  heading: "Cuéntanos tu idea",
  body: "Cada proyecto empieza con una conversación. Cuéntanos qué necesitas y te decimos cómo lo construimos.",
  options: [
    "Quiero una web que capte más clientes",
    "Necesito un sistema para gestionar mi inventario",
    "Quiero automatizar tareas repetitivas de mi equipo",
    "Necesito una app a medida para mi negocio",
  ],
  cta: { label: "Agenda una llamada", href: whatsapp.project },
};

export const faq = {
  heading: "Preguntas frecuentes",
  items: [
    {
      q: "¿Cuánto tarda un proyecto?",
      a: "Depende del alcance. Un sitio web suele tomar de 2 a 4 semanas; un sistema a medida, de 1 a 3 meses. Te damos un estimado claro en la propuesta.",
    },
    {
      q: "¿Cómo cotizan un proyecto?",
      a: "Cada proyecto es único. Tras una llamada para entender tu necesidad, te enviamos una cotización a medida, sin costo ni compromiso.",
    },
    {
      q: "¿Dan soporte y mantenimiento?",
      a: "Sí. Ofrecemos soporte y mantenimiento continuo después del lanzamiento para que todo siga funcionando sin problemas.",
    },
    {
      q: "¿De quién es la propiedad del software?",
      a: "Tuya. Al finalizar el proyecto, el software y su código fuente son 100% de tu propiedad.",
    },
    {
      q: "¿Trabajan con plantillas?",
      a: "No. Todo lo construimos a medida según tu operación y tus objetivos, sin plantillas genéricas.",
    },
    {
      q: "¿Qué tecnologías utilizan?",
      a: "Tecnologías modernas y estándar de la industria, elegidas según las necesidades de cada proyecto para garantizar rendimiento y escalabilidad.",
    },
    {
      q: "¿Trabajan de forma remota?",
      a: "Sí. Trabajamos con empresas sin importar su ubicación; todo el proceso puede ser 100% remoto.",
    },
    {
      q: "¿Cómo empezamos?",
      a: "Agenda una llamada o escríbenos. Conversamos sobre tu idea y te proponemos el mejor camino para construirla.",
    },
  ],
};

export const portfolio = {
  heading: "Proyectos que hemos construido",
  subtitle:
    "Una muestra de software y sitios web a medida que hemos desarrollado para nuestros clientes.",
  items: [
    {
      name: "Villas Bahía Salinas",
      description:
        "Sitio enfocado en generar reservas directas sin intermediarios, con diseño orientado a conversión, pasarela de pago integrada y panel administrativo propio.",
      tech: ["HTML", "CSS", "JavaScript", "PostgreSQL", "Deno", "Panel admin"],
      href: "https://villasbahiasalinas.com/",
      image: "/assets/villas-bahia-salinas.png",
    },
    {
      name: "EnForma Gimnasio",
      description:
        "MVP de landing page para un gimnasio premium en Costa Rica, con diseño de alto impacto, sección de servicios y llamadas a la acción por WhatsApp.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      href: "https://enforma-fiticio.vercel.app/",
      image: "/assets/enforma-gimnasio.png",
    },
  ] as Project[],
};

export const pricing = {
  heading: "Cada proyecto es único",
  body: "No trabajamos con paquetes fijos. Te damos una cotización a medida según lo que tu negocio realmente necesita.",
  cta: { label: "Agenda una llamada", href: whatsapp.call },
  note: "Cotización sin costo ni compromiso.",
};

export const footer = {
  columns: [
    {
      title: "Servicios",
      links: [
        { label: "Sitios web a medida", href: "#product" },
        { label: "Sistemas internos", href: "#product" },
        { label: "Automatización", href: "#product" },
        { label: "Apps y e-commerce", href: "#product" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Cómo trabajamos", href: "#solutions" },
        { label: "Comparativa", href: "#compare" },
        { label: "Preguntas", href: "#resources" },
        { label: "Contacto", href: whatsapp.project },
      ],
    },
    {
      title: "Contacto",
      links: [
        // TODO: reemplazar con datos de contacto reales
        { label: "Email", href: "#contacto" },
        { label: "WhatsApp", href: whatsapp.project },
        { label: "Agenda una llamada", href: whatsapp.call },
        { label: "LinkedIn", href: "#contacto" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacidad", href: "/privacidad" },
        { label: "Términos", href: "/terminos" },
        { label: "Seguridad", href: "/seguridad" },
      ],
    },
  ],
  copyright: "© 2026 noren. Todos los derechos reservados.",
};
