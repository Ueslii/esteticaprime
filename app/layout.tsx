import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Estética Automotiva Prime | Lavagem e Polimento Profissional",
  description:
    "Serviços de estética automotiva em Amargosa — lavagem, polimento e restauração com qualidade premium.",
  keywords: [
    "lavagem de carro",
    "polimento automotivo",
    "estética automotiva",
    "Amargosa",
    "restauração de motor",
  ],
  openGraph: {
    title: "Prime Estética Automotiva",
    description:
      "Seu carro merece o melhor. Agende um serviço conosco e veja a diferença!",
    url: "https://esteticaprime.vercel.app/",
    siteName: "Prime Estética Automotiva",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prime Estética Automotiva",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
