import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Enables static HTML export
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",  // Set only for production
  trailingSlash: true,
  images: {
    unoptimized: true,     // Required for static export (no server to optimize images)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;

// Add env variable for asset prefix
nextConfig.env = {
  NEXT_PUBLIC_ASSET_PREFIX: process.env.NODE_ENV === "production" ? "/portfolio" : "",
};