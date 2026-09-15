import type { Metadata, Viewport } from "next";
import { Fredoka } from "next/font/google";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col">
        {children}
        <Script id="impact-utt" strategy="beforeInteractive">
          {`(function(i,m,p,a,c,t){c.ire_o=p;c[p]=c[p]||function(){(c[p].a=c[p].a||[]).push(arguments)};t=a.createElement(m);var z=a.getElementsByTagName(m)[0];t.async=1;t.src=i;z.parentNode.insertBefore(t,z)})('https://utt.impactcdn.com/P-A7781487-d98c-4023-8d1c-5f990bab09761.js','script','impactStat',document,window);impactStat('transformLinks');impactStat('trackImpression');`}
        </Script>
      </body>
    </html>
  );
}
