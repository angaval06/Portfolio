import type { NextConfig } from "next";

// GitHub Pages héberge généralement un projet sous /nom-du-depot.
// Le workflow renseigne cette valeur automatiquement lors du déploiement.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

// Chaque route est exportée en dossier contenant un index.html.
// Le serveur de production n’exécute ni Node.js ni Next.js.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  basePath,
};

export default nextConfig;
