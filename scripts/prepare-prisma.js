const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const dbUrl = process.env.DATABASE_URL || "";
const isPostgres = dbUrl.startsWith("postgres://") || dbUrl.startsWith("postgresql://");

console.log("⚙️  [LÜGAT] Prisma Schema Hazırlanıyor...");
console.log(`ℹ️  DATABASE_URL algılandı: ${isPostgres ? "PostgreSQL / Supabase" : "SQLite (lugat.db)"}`);

const schemaPath = isPostgres
  ? path.join(__dirname, "..", "prisma", "schema.postgresql.prisma")
  : path.join(__dirname, "..", "prisma", "schema.prisma");

try {
  execSync(`npx prisma generate --schema="${schemaPath}"`, {
    stdio: "inherit",
    env: process.env,
  });
  console.log("✅ [LÜGAT] Prisma Client başarıyla üretildi!");
} catch (err) {
  console.error("❌ [LÜGAT] Prisma generate sırasında hata:", err);
  process.exit(1);
}
