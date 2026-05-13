import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata = {
  title: "Mogasa S.R.L. | Fábrica de Cartón Corrugado",
  description:
    "Fabricación industrial de cartón corrugado, papel sulfito, film stretch y soluciones de empaque para empaques frutícolas de Río Negro y Neuquén."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
