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
  title: "noren — Desarrollo de software a medida para empresas",
  description:
    "En noren creamos software y sitios web a medida para empresas: captamos clientes, automatizamos procesos y hacemos crecer tu operación.",
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
