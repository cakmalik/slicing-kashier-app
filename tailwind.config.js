/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: {
          400: "#E8603D",
        },
      },
    },
  },
  plugins: [],
};
