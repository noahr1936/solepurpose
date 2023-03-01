/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "solepurpose-images.s3.us-west-2.amazonaws.com",
                pathname: "/**",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
