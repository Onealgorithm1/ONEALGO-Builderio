import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleCapabilitiesPdf } from "./routes/capabilities-pdf";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Support both direct Express access and Netlify function rewrites
  ["/api/capabilities.pdf", "/.netlify/functions/api/capabilities.pdf"].forEach(
    (path) => app.get(path, handleCapabilitiesPdf),
  );

  // Client-side JS error reporting endpoint
  app.post("/api/log-js-error", (req, res) => {
    try {
      console.error("[client-js-error]", req.body || "no payload");
    } catch (e) {
      console.error("Error logging client JS error", e);
    }
    res.json({ ok: true });
  });

  return app;
}
