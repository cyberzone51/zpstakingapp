/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  images: {
    domains: ['ipfs.thirdweb.com', 'gateway.ipfscdn.io'],
  },
}

module.exports = nextConfig
