/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "image.tmdb.org",
      "i-viaplay-com.akamaized.net",
      "themoviedb.org",
      "www.themoviedb.org",
    ],
  },
};

module.exports = nextConfig;
