/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images');
module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  esModule: true,
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/post',
        destination: '/',
        permanent: false,
      },
    ];
  },
});
