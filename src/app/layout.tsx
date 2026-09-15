import type { Metadata, Viewport } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thewarehouse.cz"),
  title: "The Warehouse",
  description:
    "The Warehouse – komunita pro všechny, kdo se chtějí naučit e-commerce. Praktické know-how, strategie a podpora pro budování úspěšného online byznysu.",
  appleWebApp: { title: "Warehouse" },
  openGraph: {
    title: "The Warehouse",
    description:
      "Komunita pro všechny, kdo se chtějí naučit e-commerce a vybudovat úspěšný online byznys.",
    url: "https://thewarehouse.cz",
    siteName: "The Warehouse",
    images: [{ url: "/logo.png", width: 1024, height: 1024 }],
    locale: "cs_CZ",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#212628",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${fredoka.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
