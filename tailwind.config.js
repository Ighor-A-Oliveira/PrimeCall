/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'jura': ['Jura', 'sans-serif'],
      },
      backgroundImage: {
        'pink-bg': "url('/assets/images/pink-bg.png')", // Replace with your image path
      },
    },
  },
  plugins: [],
}

