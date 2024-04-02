/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'header-lt': '#E3350D',
        'header-dt': '#4D638C',
        'page-lt': '#EEEEEE',
        'page-dt': '#354159',
        'details-lt': '#FFFFFF',
        'details-dt': '#1F2735',
        'text-lt': '#262626',
        'text-dt': '#A1A1A1',
        'favorite-icon': '#ACACAC',
      },
    },
    fontSize: {
      base: '1rem',
      sm: '10px',
      md: '14px',
      'lg': '32px',
    }
  },
  plugins: [],
  darkMode: 'selector',
}

