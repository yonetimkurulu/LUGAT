import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs";

/**
 * Locate the bundled SQLite database across possible Serverless and local paths.
 */
function findBundledDatabase(): string | null {
  const candidates = [
    path.join(process.cwd(), "prisma", "lugat.db"),
    path.join(process.cwd(), ".next", "server", "prisma", "lugat.db"),
    path.join(__dirname, "prisma", "lugat.db"),
    path.join(__dirname, "..", "prisma", "lugat.db"),
    path.join(__dirname, "..", "..", "prisma", "lugat.db"),
    path.join(__dirname, "..", "..", "..", "prisma", "lugat.db"),
    path.join(__dirname, "..", "..", "..", "..", "prisma", "lugat.db"),
    path.resolve("./prisma/lugat.db"),
  ];

  for (const candidate of candidates) {
    try {
      if (fs.existsSync(candidate)) {
        const stats = fs.statSync(candidate);
        // Ensure it is a valid database file, not an empty placeholder
        if (stats.size > 100000) {
          return candidate;
        }
      }
    } catch {
      // Continue checking next candidate
    }
  }
  return null;
}

let activeDatabaseUrl = process.env.DATABASE_URL;

// Configure SQLite for Vercel Serverless or local development
if (!activeDatabaseUrl || activeDatabaseUrl.startsWith("file:")) {
  if (process.env.VERCEL) {
    const tmpDbPath = path.join("/tmp", "lugat.db");
    const bundledPath = findBundledDatabase();

    if (bundledPath) {
      let needsCopy = true;
      try {
        if (fs.existsSync(tmpDbPath)) {
          const tmpStat = fs.statSync(tmpDbPath);
          const bundledStat = fs.statSync(bundledPath);
          // Only skip copy if tmp has valid content matching the bundled size
          if (tmpStat.size > 100000 && tmpStat.size === bundledStat.size) {
            needsCopy = false;
          }
        }
      } catch {
        needsCopy = true;
      }

      if (needsCopy) {
        try {
          const atomicTemp = `${tmpDbPath}.${process.pid}.${Date.now()}.tmp`;
          fs.copyFileSync(bundledPath, atomicTemp);
          fs.renameSync(atomicTemp, tmpDbPath);
        } catch (err) {
          try {
            // Direct copy fallback if atomic rename has filesystem lock
            fs.copyFileSync(bundledPath, tmpDbPath);
          } catch (copyErr) {
            console.error("Vercel SQLite copy failed, falling back to bundled path:", copyErr);
          }
        }
      }

      if (fs.existsSync(tmpDbPath) && fs.statSync(tmpDbPath).size > 100000) {
        activeDatabaseUrl = `file:${tmpDbPath}`;
      } else {
        activeDatabaseUrl = `file:${bundledPath}`;
      }
    }
  } else {
    // Local development: use absolute path to prisma/lugat.db
    const localDbPath = path.join(process.cwd(), "prisma", "lugat.db");
    activeDatabaseUrl = `file:${localDbPath}`;
  }

  if (activeDatabaseUrl) {
    process.env.DATABASE_URL = activeDatabaseUrl;
  }
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: activeDatabaseUrl?.startsWith("file:")
      ? { db: { url: activeDatabaseUrl } }
      : undefined,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

// Always retain singleton instance in globalThis to prevent SQLite connection pool exhaustion
if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = prisma;
}
