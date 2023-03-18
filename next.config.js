/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["social.tattoobox.mediaserviceagency.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "social.tattoobox.mediaserviceagency.com",
        port: "",
        pathname: "/storage/tatto/**",
      },
    ],
  },
};

module.exports = nextConfig;
