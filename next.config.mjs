import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true
    },
    // basePath: '/apple-books',
    // assetPrefix: '/apple-books/'
};

export default withFlowbiteReact(nextConfig);