// const { withNextVideo } = require('next-video/process');
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/user",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
