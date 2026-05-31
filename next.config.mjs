/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
      },

      /* If you want specific host name images */
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      //   port: '',
      //   pathname: '/**',
      // },

      /* If you want to accept images from any host */
      // {
      //   protocol: 'https',
      //   hostname: '**',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
