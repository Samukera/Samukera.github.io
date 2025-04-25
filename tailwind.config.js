const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0089BF",
        secondary: "#00C1B4",
        accent: "#7837E8",
        neutral: "#333333",
        "base-100": "#F6F6F6",
        "subtext": "#8B8B8B",
        info: "#3EA4DC",
        success: "#00C1B4",
        warning: "#FE7E2F",
        error: "#FF4B6A",
        darkBlue: {
          50: "#EAF1FF",
          100: "#D4DAFF",
          200: "#BDC4F2",
          300: "#A7AEDC",
          400: "#9299C5",
          500: "#7D84AF",
          600: "#68709A",
          700: "#545C85",
          800: "#404971",
          900: "#1E2A4E",
        },
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
