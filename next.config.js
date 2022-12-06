/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.redditinc.com"],
  },
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
