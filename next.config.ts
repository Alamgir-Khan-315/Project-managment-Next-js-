import type { NextConfig } from "next";
import { ImageLoader } from "next/image";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",

        pathname: "/storage/img/",
      },
    ],
  },
};

export default nextConfig;
