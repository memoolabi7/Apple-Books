import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    // basePath: '/apple-books',
    // assetPrefix: '/apple-books/'
};

export default withFlowbiteReact(nextConfig);