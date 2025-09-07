/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com', // allow external Unsplash images
    ],
  },
};

export default nextConfig;
