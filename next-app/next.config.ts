import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  reactCompiler: true,
  /* config options here */
  experimental: { turbopackFileSystemCacheForDev: true, mcpServer: true },
  // allowedDevOrigins:['*'],
};

export default nextConfig;
