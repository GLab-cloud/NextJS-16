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
      allowedOrigins: ["*.vercel.app", "next-js-16-eight.vercel.app"],
    },
    turbopackFileSystemCacheForDev: true,
    mcpServer: true,
  },
  // allowedDevOrigins:['*'],
};

export default nextConfig;
