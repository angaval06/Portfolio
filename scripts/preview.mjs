// Petit serveur local de vérification ; utiliser Nginx ou Apache en production.
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { stat, readFile } from "node:fs/promises";

const root = fileURLToPath(new URL("../out/", import.meta.url));
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};
await stat(path.join(root, "index.html")).catch(() => {
  console.error("Lance d’abord npm run build pour créer le dossier out/.");
  process.exit(1);
});
http.createServer(async (req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { Allow: "GET, HEAD" });
    return res.end();
  }
  try {
    const url = new URL(req.url, "http://localhost");
    const pathname = decodeURIComponent(url.pathname);
    let file = path.resolve(root, `.${pathname}`);
    if (path.relative(root, file).startsWith("..") || pathname.includes("\0")) {
      res.writeHead(403);
      return res.end();
    }
    let info = await stat(file);
    if (info.isDirectory()) {
      if (!pathname.endsWith("/")) {
        res.writeHead(308, { Location: `${url.pathname}/${url.search}` });
        return res.end();
      }
      file = path.join(file, "index.html");
      info = await stat(file);
    }
    if (!info.isFile()) throw new Error("Not a file");
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream", "X-Content-Type-Options": "nosniff" });
    res.end(req.method === "HEAD" ? undefined : await readFile(file));
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(req.method === "HEAD" ? undefined : await readFile(path.join(root, "404.html")).catch(() => "Page introuvable"));
  }
}).listen(8080, "127.0.0.1", () => console.log("Aperçu : http://127.0.0.1:8080"));
