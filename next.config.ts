import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/*": ["./prisma/lugat.db", "./prisma/schema.prisma"],
    "/**/*": ["./prisma/lugat.db", "./prisma/schema.prisma"],
    "/api/**/*": ["./prisma/lugat.db", "./prisma/schema.prisma"],
    "/kokler/**/*": ["./prisma/lugat.db", "./prisma/schema.prisma"],
    "/kelime/**/*": ["./prisma/lugat.db", "./prisma/schema.prisma"],
    "/kutuphane/**/*": ["./prisma/lugat.db", "./prisma/schema.prisma"],
    "/ogrenme/**/*": ["./prisma/lugat.db", "./prisma/schema.prisma"],
  },
  serverExternalPackages: ["@prisma/client", "prisma"],
};

export default nextConfig;
