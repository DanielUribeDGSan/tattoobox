/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  headers: [
    {
      key: "Access-Control-Allow-Origin",
      value: "https://tattooboxmx.netlify.app",
    },
  ],
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["social.tattoobox.mediaserviceagency.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "social.tattoobox.mediaserviceagency.com",
      },
    ],
  },
};

module.exports = nextConfig;
