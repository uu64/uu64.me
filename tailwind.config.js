/* eslint-disable @typescript-eslint/no-var-requires */
const { colors, fontFamily } = require("tailwindcss/defaultTheme");

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
    fontFamily: {
      ...fontFamily,
      logo: ["Montserrat", "san-serif"]
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {},
  plugins: [],
};
