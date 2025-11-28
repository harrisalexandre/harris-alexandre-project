import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Rota para download do currículo
  app.get("/api/download-resume", (req, res) => {
    const filePath = path.join(__dirname, "public", "curriculo-harris-alexandre.txt");
    
    res.download(filePath, "Harris-Alexandre-Curriculo.txt", (err) => {
      if (err) {
        console.error("Erro ao fazer download do currículo:", err);
        res.status(500).json({ error: "Erro ao fazer download do currículo" });
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
