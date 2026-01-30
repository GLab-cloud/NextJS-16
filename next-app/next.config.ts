import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
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
  experimental: {
    serverActions: {
      allowedOrigins: [
        "*.vercel.app",
        "dev-event-eight-black.vercel.app",
        "xwtjjc-3000.csb.app",
      ],
    },
    turbopackFileSystemCacheForDev: true,
    // mcpServer: true,
  },
  // allowedDevOrigins:['*'],
};

export default nextConfig;
