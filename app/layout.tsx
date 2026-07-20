import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frío Total",
  description:
    "Servicio técnico especializado en instalación, reparación y mantenimiento de equipos de refrigeración y aire acondicionado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <link rel="icon" href="/frioTotal.ico" />
      <body>{children}</body>
    </html>
  );
}