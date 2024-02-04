const { nextui } = require("@nextui-org/react"); // eslint-disable-line

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {},
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: {
              100: "#C6DFF7",
              200: "#90BEF0",
              300: "#548CD2",
              400: "#295BA5",
              500: "#2c55fc",
              600: "#001E5B",
              700: "#00164C",
              800: "#000F3D",
              900: "#000B32",
              DEFAULT: "#2c55fc",
            },
            secondary: {
              100: "#FEF9DB",
              200: "#FEF1B7",
              300: "#FEE893",
              400: "#FEDE78",
              500: "#fae038",
              600: "#DAAA37",
              700: "#B68826",
              800: "#936818",
              900: "#79510E",
              DEFAULT: "#fae038",
            },
            content1: {
              DEFAULT: "#FFFFFF"
            },
            content2: {
              DEFAULT: "#F2F6FC"
            },

          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: {
              100: "#CBEAFD",
              200: "#98E7FB",
              300: "#64CFF5",
              400: "#3DA8EB",
              500: "#2c55fc",
              600: "#0276BE",
              700: "#02639F",
              800: "#014F80",
              900: "#00416A",
              DEFAULT: "#2c55fc",
            },
            secondary: {
              100: "#FEEDD9",
              200: "#FDD6B3",
              300: "#FAB98C",
              400: "#F69C6F",
              500: "#2c55fc",
              600: "#CF4F2F",
              700: "#AD3220",
              800: "#8B1B14",
              900: "#730C0D",
              DEFAULT: "#2c55fc",
            },
            content1: {
              DEFAULT: "#09151C"
            },
            content2: {
              DEFAULT: "#000206"
            }
          }, // dark theme colors
        },
      },
    })
  ]
}

