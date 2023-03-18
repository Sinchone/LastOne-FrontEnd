/** @type {import('next').NextConfig} */
import withImages from 'next-images';

export default withImages({
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
});
