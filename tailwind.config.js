/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Primary color
        "primary-color": "#228be6",
        "primary-tint-color": "#3897e9",
        "primary-shade-color": "#1f7dcf",

        // Gray color
        "gray-color": "#495057",
        "gray-tint-color": "#6d7379",
        "gray-shade-color": "#3a4046",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
