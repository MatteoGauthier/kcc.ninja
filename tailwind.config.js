const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Work Sans'", "Work Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#49ffa1",
        secondary: "#ffc107",
        tertiary: "#ffc107",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
  presets: [require("full-palette")],
}
