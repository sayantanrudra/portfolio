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

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**',
//       },
//     ],
//   },
//   experimental: {
//     optimizePackageImports: ['lucide-react'],
//   },
// };

// export default nextConfig;