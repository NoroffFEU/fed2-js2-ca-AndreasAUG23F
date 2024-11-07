/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ts}", "!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        primary: "#6d3feb",
        secondary: "#6b39eb",
        accent: "#00e676",
        danger: "#ff1744",
        dark: "#2e2c2c",
        grayish: "#f8f8f8",
      },
      boxShadow: {
        "custom-lg": "0 10px 15px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
