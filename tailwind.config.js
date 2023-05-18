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
    },
  },
  plugins: [],
};
