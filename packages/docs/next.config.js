/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@maidenui/tokens',
    '@maidenui/theme',
    '@maidenui/ui',
    '@maidenui/typography',
    '@maidenui/motion',
    '@maidenui/atmosphere',
  ],
}

module.exports = nextConfig
