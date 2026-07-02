import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "LUDATO FAMILY Cars Services | Rodinný autoservis",
  description:
    "Komplexná starostlivosť o vozidlá všetkých značiek a modelov. Diagnostika, opravy, servisné prehliadky, brzdy, podvozky, klimatizácia. Zažite rozdiel v dôveryhodnom rodinnom servise LUDATO.",
  keywords:
    "autoservis, LUDATO, rodinný servis, diagnostika auta, opravy vozidiel, servis klimatizácie, oprava bŕzd",
  openGraph: {
    title: "LUDATO FAMILY Cars Services",
    description: "Autám rozumieme a prácu na nich berieme osobne. Poctivá práca bez kompromisov.",
    locale: "sk_SK",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased overflow-x-hidden flex flex-col min-h-screen`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
