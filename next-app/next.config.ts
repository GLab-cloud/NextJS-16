import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  /* config options here */
  experimental: { turbopackFileSystemCacheForDev: true, mcpServer: true },
  // allowedDevOrigins:['*'],
};

export default nextConfig;
