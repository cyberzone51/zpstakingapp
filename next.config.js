/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // Добавляем настройки для Netlify
  target: 'serverless',
}

module.exports = nextConfig
