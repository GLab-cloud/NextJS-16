import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: { turbopackFileSystemCacheForDev: true, mcpServer: true },
};

export default nextConfig;
