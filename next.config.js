/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const withMDX = require("@next/mdx")();

module.exports = withMDX({
  pageExtensions: ["tsx", "ts", "jsx", "js", "mdx"],
  webpack: (config) => {
    config.resolve.alias["@/*"] = path.resolve(__dirname, "./*");

    return config;
  },
});
