import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "export",
  basePath: isProd ? "/silentia" : "",
  assetPrefix: isProd ? "/silentia/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
