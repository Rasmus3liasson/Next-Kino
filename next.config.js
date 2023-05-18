/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "image.tmdb.org",
      "i-viaplay-com.akamaized.net",
      "themoviedb.org",
      "www.themoviedb.org",
      "themoviedb.org/t/p/original/ssc6Q0zNQ9ZleahSWY1QMVR9hl5.jpg",
    ],
  },
};

module.exports = nextConfig;
