import type { Metadata } from "next";
import { Gabarito, Onest } from "next/font/google";
import "./globals.css";

// Onest — body font (free Gellix alternative). Keeps --font-gellix var name.
const onest = Onest({
  variable: "--font-gellix",
  subsets: ["latin"],
  display: "swap",
});

// Gabarito — display / headings (free UlmGrotesk alternative). Keeps --font-ulm var name.
const gabarito = Gabarito({
  variable: "--font-ulm",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noren.tech"),
  title: {
    default: "noren — Desarrollo de software a medida en Costa Rica",
    template: "%s | noren",
  },
  description:
    "Agencia de desarrollo de software a medida en Costa Rica. Creamos sitios web, sistemas internos, automatizaciones y apps móviles para empresas que quieren crecer.",
  keywords: [
    "desarrollo de software Costa Rica",
    "agencia de software a medida Costa Rica",
    "desarrollo web Costa Rica",
    "automatización de procesos Costa Rica",
    "sistemas de gestión a medida",
    "apps móviles Costa Rica",
    "sitio web para empresa Costa Rica",
  ],
  openGraph: {
    title: "noren — Software a medida para empresas en Costa Rica",
    description:
      "Creamos software y sitios web a medida para empresas en Costa Rica: captamos clientes, automatizamos procesos y hacemos crecer tu operación.",
    url: "https://noren.tech",
    siteName: "noren",
    locale: "es_CR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "noren — Software a medida para empresas en Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "noren — Software a medida para empresas en Costa Rica",
    description:
      "Agencia de desarrollo de software a medida en Costa Rica.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://noren.tech",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${onest.variable} ${gabarito.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
