import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "private-us-east-1.manuscdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
