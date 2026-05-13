import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Enables static HTML export
  basePath: "/portfolio",  // Must match your repo name exactly
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