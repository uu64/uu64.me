/* eslint-disable @typescript-eslint/no-var-requires */
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
  ],
  theme: {
    colors: {
      ...colors,
      custom: {
        dark: "#163172",
        normal: "#1e56a0",
        light: "#f8f8ff",
        white: "#f6f6f6",
      }
    },
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
    },
  },
  variants: {},
  plugins: [],
};
