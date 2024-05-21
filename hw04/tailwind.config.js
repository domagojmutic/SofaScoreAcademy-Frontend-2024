/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-lt": "#E3350D",
        "header-dt": "#4D638C",
        "page-lt": "#EEEEEE",
        "page-dt": "#354159",
        "details-lt": "#FFFFFF",
        "details-dt": "#1F2735",
        "text-lt": "#262626",
        "text-dt": "#A1A1A1",
        "favorite-icon": "#ACACAC",
      },
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
    },
    fontSize: {
      base: "1rem",
      sm: "10px",
      md: "14px",
      lg: "32px",
    },
    screens: {
      "max-lg": { max: "1440px" },
      "max-md": { max: "1280px" },
      "max-sm": { max: "1024px" },
      "min-xl": { min: "1536px" },
      "min-xxl": { min: "1600px" },
      phone: { max: "900px" },
    },
  },
  plugins: [],
  darkMode: "selector",
};
