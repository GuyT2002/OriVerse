import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      // Remove picsum.photos pattern as local images are used now
      // {
      //   protocol: 'https',
      //   hostname: 'picsum.photos',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;
