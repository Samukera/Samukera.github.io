/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        red: "0 0 2em rgba(255, 10, 10, 0.8)",
        blueSpider: "0 0 4em #253780",
      },
      fontFamily: {
        fortnite: ['"fortnite"', "sans-serif"],
      },
      margin: {
        72: "22rem",
      },
      colors: {
        progress: "#06CA98",
        backgroud: "#000A2C",
        card: "#0F1739",
        spider1: "#3E2B96",
        spider0: "#0D0D0D",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
