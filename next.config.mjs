/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*townnews.com",
      },
    ],
  },
};

export default nextConfig;
