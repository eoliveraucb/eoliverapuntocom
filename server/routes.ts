import type { Express } from "express";
import { createServer, type Server } from "http";
import fs from 'fs';
import path from 'path';

interface VisitorRecord {
  ip: string;
  timestamp: string;
  userAgent: string;
  path: string;
}

function getRecentVisitors(count: number = 10): VisitorRecord[] {
  try {
    const VISITORS_FILE = path.join(process.cwd(), 'visitors.json');
    if (fs.existsSync(VISITORS_FILE)) {
      const data = fs.readFileSync(VISITORS_FILE, 'utf8');
      const visitors = JSON.parse(data);
      return visitors.slice(0, count);
    }
  } catch (error) {
    console.error('Error reading visitors:', error);
  }
  return [];
}

export function registerRoutes(app: Express): Server {
  // API endpoint to get recent visitors
  app.get("/api/visitors", (req, res) => {
    const count = parseInt(req.query.count as string) || 10;
    const visitors = getRecentVisitors(count);
    res.json(visitors);
  });

  const server = createServer(app);
  return server;
}