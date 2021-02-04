const { colors, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    fill: (theme) => ({
      night1: theme("colors.custom.night1"),
    }),
    colors: {
      ...colors,
      custom: {
        // Nord Color Pallets
        // https://www.nordtheme.com/
        night0: "#2e3440",
        night1: "#3b4252",
        night2: "#434c5e",
        night3: "#4c566a",
        snow0: "#d8dee9",
        snow1: "#e5e9f0",
        snow2: "#eceff4",
        frost0: "#8fbcbb",
        frost1: "#88c0d0",
        frost2: "#81a1c1",
        frost3: "#5e81ac",
        aurora0: "#bf616a",
        aurora1: "#d08770",
        aurora2: "#ebcb8b",
        aurora3: "#a3be8c",
        aurora4: "#b48ead",
      },
    },
    fontFamily: {
      ...fontFamily,
      logo: ["Homemade Apple", "san-serif"],
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
