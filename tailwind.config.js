/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["LatoRegular", "sans-serif"],
        "lato-light": ["LatoLight", "sans-serif"],
        "lato-bold": ["LatoBold", "sans-serif"],
      },
      colors: {
        secondary: "#0A155A",
        lightGray: "#BBC2D8",
        gray: "#7D80AA",
        tertiary: "#F4F6FD",
      },
    },
  },
  plugins: [],
};
