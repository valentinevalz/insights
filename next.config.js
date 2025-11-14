import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {}, // ✅ empty object, not boolean
  },
  webpack: (config) => {
    // ✅ Set up aliases so '@/' works like in your code
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve("./"),
    };
    return config;
  },
};

export default nextConfig;