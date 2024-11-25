/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        prgreen: "#005555",
        prgreen2: "#198754",
      },
      fontFamily: {
        inter: ["Inter", "serif"],
        bungee: ["Bungee", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
