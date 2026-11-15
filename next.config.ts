import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/**": ["./prisma/lugat.db", "./prisma/schema.prisma"],
  },
  serverExternalPackages: ["@prisma/client", "prisma"],
};

export default nextConfig;
