const { withContentlayer } = require("next-contentlayer");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
module.exports = withContentlayer(
  withPWA({
    productionBrowserSourceMaps: true,
    reactStrictMode: true,
    // swcMinify: true,
    images: {
      domains: [
        "ucarecdn.com",
        "cdn.buymeacoffee.com",
        "res.cloudinary.com",
        "imgur.com",
        "i.imgur.com",
        "cutt.ly",
        "activity-graph.herokuapp.com",
        "i.scdn.co", // images from spotify
        "images.unsplash.com",
        "github.com",
        "1000logos.net",
        "d9-wret.s3.us-west-2.amazonaws.com",
        "assets.themuse.com",
        "brand.tech.cornell.edu",
        "brand.cornell.edu",
        "www.pngfind.com",
        "photos.google.com",
        "photos.app.goo.gl",
      ],
    },
  })
);
