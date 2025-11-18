const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pagePortfolio.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fonts: {
          dark: "#000000",
          primary: "#34402F",
          secondary: "#8FA685",
          tertiary: "#576C4E",
        },
        backgrounds: {
          primary: "#FAFAFA",
          secondary: "#8FA685",
          accent: "#FFCC63",
        },
        buttons: {
          dark: "#000000",
          primary: "#2E8B57",
          secondary: "#FFD289",
          accent: "#FEF1DB",
        },
        layerBlur: {
          green: "#DDF6D2",
          yellow: "#FFEAC9",
          pink: "#FFD2CE",
        },
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        theme: ["Righteous", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
