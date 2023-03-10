/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        blur: "rgba(0,0,0,.437)",
      },
      backgroundImage: {
        linear: "linear-gradient(90deg, #1a89be 0, #156185 50%, #0c3143 100%)",
      },
    },
  },
  plugins: [],
};
