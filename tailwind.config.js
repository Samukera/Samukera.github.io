const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#27755c",
        secondary: "#408d73",
        accent: "#58a68b",
        tertiary: "#71bea2",
        quaternary: "#89d6b9",
        dark: "#1a1a2e",
        darker: "#0f0f1a",
        surface: "#16213e",
        glass: "rgba(255, 255, 255, 0.05)",
        glassBorder: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(39, 117, 92, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(39, 117, 92, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        custom: {
          "primary": "#27755c",
          "secondary": "#408d73",
          "accent": "#58a68b",
          "neutral": "#1a1a2e",
          "base-100": "#0f0f1a",
          "base-200": "#1a1a2e",
          "base-300": "#16213e",
          "info": "#3EA4DC",
          "success": "#00C1B4",
          "warning": "#FE7E2F",
          "error": "#FF4B6A",
        },
      },
    ],
  },
};
