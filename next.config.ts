import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    basePath: '/public',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/public',
                permanent: true,
                basePath: false,
            },
        ];
    },
    // Optional: Add other config options here
};

export default nextConfig;
