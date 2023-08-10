module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3fd35d",
        secondary: "#59e0a6",
        accent: "#5db4cc",
        neutral: "#312a3c",
        "base-100": "#f5eff6",
        info: "#427AA1",
        success: "#32c8ac",
        warning: "#da9010",
        error: "#fc5940",
      },
    },
  },
  plugins: [require("daisyui")],
};
