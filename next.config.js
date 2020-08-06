/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  pageExtensions: ["tsx", "ts", "jsx", "js", "mdx"],
  webpack: (config, options) => {
    config.resolve.alias["@/*"] = path.resolve(__dirname, "./*");
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        "@mdx-js/loader",
        path.join(__dirname, "./lib/fm-loader"),
      ],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/2019/:id*",
        destination: "/blog/2019/:id*",
        permanent: true,
      },
      {
        source: "/2020/:id*",
        destination: "/blog/2020/:id*",
        permanent: true,
      },
    ];
  },
};
