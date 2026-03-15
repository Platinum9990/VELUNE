import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "VELUNE | Furniture shaped by atmosphere",
  description:
    "VELUNE is a luxury furniture house crafting sculptural, atmospheric pieces for contemporary interiors."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${display.variable} ${sans.variable} bg-base text-charcoal`}>
        {children}
      </body>
    </html>
  );
}
