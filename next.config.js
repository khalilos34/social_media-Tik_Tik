/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["as2.ftcdn.net", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
