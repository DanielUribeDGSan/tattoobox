/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  source: "/api/:path*",
  destination: "https://tattooboxmx.netlify.app/:path*",
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["social.tattoobox.mediaserviceagency.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "social.tattoobox.mediaserviceagency.com",
        port: "",
        pathname: "/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
