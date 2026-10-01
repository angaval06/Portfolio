import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Polices d’origine embarquées : aucun appel à Google Fonts au chargement.
const geistSans = localFont({
  src: "../public/fonts/geist-latin.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "../public/fonts/geist-mono-latin.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Lavagna Théo | Systèmes, réseaux & cybersécurité",
    template: "%s | Lavagna Théo",
  },
  description:
    "Portfolio professionnel de Lavagna Théo, ingénieur systèmes, réseaux et cybersécurité.",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dark" lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{const t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;const l=localStorage.getItem('portfolio-locale');if(l==='fr'||l==='en')document.documentElement.lang=l}catch(e){}",
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
