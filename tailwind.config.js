/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
        mono: ["New Rocker", "cursive"],
      },
      colors: {
        primary: "#000",
        secondary: "#E4D3A8",
      },
    },
  },
  plugins: [],
};
