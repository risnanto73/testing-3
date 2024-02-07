/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "blue-navy": "#0A192F",
        "orange-dark": "#FF5A00",
        "neon-blue": "#00B9FC",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "serif"],
      },
      dropShadow: {
        neon: ["0 0 10px #00B9FC", "0 0 10px #ff0000"],
      },
      animation: {
        neon: "neon 1s ease-in-out infinite alternate",
      },
      keyframes: {
        neon: {
          "0%": {
            textShadow: "0 0 10px #00B9FC",
          },
          "100%": {
            textShadow: "0 0 10px #ff0000",
          },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
