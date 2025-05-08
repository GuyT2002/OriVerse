/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // No remotePatterns needed as only local images from public/images are used
  },
  output: 'export', // Added for static export if needed for GitHub Pages
};

module.exports = nextConfig;
