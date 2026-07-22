import type { Metadata } from "next";
import "./globals.css";
import FrostBackground from "@/components/FrostBackground";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Frío Total",
  description:
    "Servicio técnico especializado en instalación, reparación y mantenimiento de equipos de refrigeración y aire acondicionado.",
    icons: {
    icon: "/frio.ico", // 👈 referencia al archivo en public/
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="relative overflow-x-hidden">
        <FrostBackground/>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}