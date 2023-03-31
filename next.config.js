/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Ignore "Image is missing required 'width' property" errors
    ignoreImageWidths: true,
  },
}

module.exports = nextConfig
