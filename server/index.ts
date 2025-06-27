import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import fs from 'fs';
import path from 'path';

const app = express();
app.set('trust proxy', true); // Enable trust proxy for accurate IP detection
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Visitor tracking
interface VisitorRecord {
  ip: string;
  timestamp: string;
  userAgent: string;
  path: string;
}

const VISITORS_FILE = path.join(process.cwd(), 'visitors.json');

function saveUniqueVisitor(visitor: VisitorRecord) {
  try {
    let visitors: VisitorRecord[] = [];
    if (fs.existsSync(VISITORS_FILE)) {
      const data = fs.readFileSync(VISITORS_FILE, 'utf8');
      visitors = JSON.parse(data);
    }
    
    // Check if IP already exists
    const existingIndex = visitors.findIndex(v => v.ip === visitor.ip);
    
    if (existingIndex !== -1) {
      // Update existing visitor with latest timestamp
      visitors[existingIndex] = visitor;
    } else {
      // Add new unique visitor to the beginning
      visitors.unshift(visitor);
    }
    
    // Keep only last 20 unique visitors
    visitors = visitors.slice(0, 20);
    
    fs.writeFileSync(VISITORS_FILE, JSON.stringify(visitors, null, 2));
  } catch (error) {
    console.error('Error saving visitor:', error);
  }
}

function getUniqueVisitors(count: number = 20): VisitorRecord[] {
  try {
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

// Password protection middleware
const ADMIN_PASSWORD = 'Dmitry69!';

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  // Get visitor IP address
  const visitorIP = req.ip || 
                   req.connection.remoteAddress || 
                   req.socket.remoteAddress ||
                   (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
                   'unknown';

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    const timestamp = new Date().toISOString();
    
    // Save visitor data (only for non-asset requests to avoid spam)
    if (!path.includes('/@fs/') && !path.includes('.js') && !path.includes('.css') && !path.includes('.png') && !path.includes('.jpg') && !path.includes('.svg')) {
      const visitor: VisitorRecord = {
        ip: visitorIP,
        timestamp,
        userAgent: req.get('User-Agent') || 'Unknown',
        path
      };
      saveUniqueVisitor(visitor);
    }
    
    // Log all requests with IP addresses
    let logLine = `[${timestamp}] ${visitorIP} - ${req.method} ${path} ${res.statusCode} in ${duration}ms`;
    
    if (path.startsWith("/api") && capturedJsonResponse) {
      logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
    }

    if (logLine.length > 120) {
      logLine = logLine.slice(0, 119) + "…";
    }

    log(logLine);
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
