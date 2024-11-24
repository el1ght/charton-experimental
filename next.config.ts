import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,

    images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'f003.backblazeb2.com',
                    port: '',
                    pathname: '/file/charton-thumbnails/**',
                },
            ],
        },

};

export default nextConfig;
