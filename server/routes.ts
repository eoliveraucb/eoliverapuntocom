
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

const ADMIN_PASSWORD = 'Dmitry69!';

function getUniqueVisitors(count: number = 100): VisitorRecord[] {
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

// Password check middleware
function requirePassword(req: any, res: any, next: any) {
  const password = req.headers.authorization?.replace('Bearer ', '') || req.query.password;
  
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password required' });
  }
  
  next();
}

export function registerRoutes(app: Express): Server {
  // Public API endpoint for regular visitors (old endpoint)
  app.get("/api/visitors", (req, res) => {
    const count = parseInt(req.query.count as string) || 10;
    const visitors = getUniqueVisitors(count);
    res.json(visitors);
  });

  // Protected API endpoint for unique visitors with location data
  app.get("/api/unique-visitors", requirePassword, (req, res) => {
    const visitors = getUniqueVisitors(100);
    res.json(visitors);
  });

  // Password validation endpoint
  app.post("/api/validate-password", (req, res) => {
    const { password } = req.body;
    
    if (password === ADMIN_PASSWORD) {
      res.json({ valid: true });
    } else {
      res.status(401).json({ valid: false, error: 'Invalid password' });
    }
  });

  const server = createServer(app);
  return server;
}
