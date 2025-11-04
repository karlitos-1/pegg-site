import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ClientBody from "./ClientBody";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title:
    "PeggSite - Agence Digitale Pointe-Noire | Création Sites Web & Marketing Digital",
  description:
    "PeggSite, votre agence digitale à Pointe-Noire. Création de sites web, applications mobiles, marketing digital, SEO. Transformez votre vision en succès numérique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <ClientBody className={poppins.variable}>{children}</ClientBody>
    </html>
  );
}
