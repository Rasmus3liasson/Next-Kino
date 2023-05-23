/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org'
      },
      {
        protocol: 'https',
        hostname: 'i-viaplay-com.akamaized.net'
      },
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org'
      }
    ],
  },
}

module.exports = nextConfig;
