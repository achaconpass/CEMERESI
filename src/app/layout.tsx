import type { Metadata } from "next";
import { Montserrat, EB_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CEMERESI · Medicina y cirugía estética en Madrid",
  description:
    "Clínica de medicina estética, cirugía estética, capilar, fisioterapia y nutrición en Moncloa-Argüelles. Diagnóstico antes que producto.",
  keywords: [
    "medicina estética Madrid",
    "cirugía estética Madrid",
    "clínica estética Moncloa",
    "clínica estética Argüelles",
    "cirugía capilar Madrid",
    "FUE Zafiro Madrid",
    "fisioterapia Moncloa",
  ],
  authors: [{ name: "CEMERESI" }],
  openGraph: {
    title: "CEMERESI · Medicina y cirugía estética en Madrid",
    description:
      "Diagnóstico antes que producto. Quince años escuchando antes de tratar.",
    locale: "es_ES",
    type: "website",
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
      className={cn(
        "h-full antialiased",
        montserrat.variable,
        ebGaramond.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}