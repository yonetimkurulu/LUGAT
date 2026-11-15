import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs";

// Vercel Serverless & Local SQLite Path Resolver
if (!process.env.DATABASE_URL || process.env.DATABASE_URL.startsWith("file:")) {
  if (process.env.VERCEL) {
    // On Vercel Serverless Functions, /var/task is read-only.
    // Copy the bundled SQLite DB to /tmp where SQLite has full read/write permissions.
    const tmpDbPath = path.join("/tmp", "lugat.db");
    const bundledDbPath = path.join(process.cwd(), "prisma", "lugat.db");

    try {
      if (!fs.existsSync(tmpDbPath) && fs.existsSync(bundledDbPath)) {
        fs.copyFileSync(bundledDbPath, tmpDbPath);
      }
      process.env.DATABASE_URL = `file:${tmpDbPath}`;
    } catch (err) {
      console.error("Vercel /tmp SQLite initialization error:", err);
      process.env.DATABASE_URL = `file:${bundledDbPath}`;
    }
  } else {
    // Local development: use absolute path to prisma/lugat.db
    const localDbPath = path.join(process.cwd(), "prisma", "lugat.db");
    process.env.DATABASE_URL = `file:${localDbPath}`;
  }
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
