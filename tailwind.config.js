/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'jura': ['Jura', 'sans-serif'],
      },
      backgroundImage: {
        'custom-bg': "url('src/assets/images/customer-journey-management.webp')", // Replace with your image path
      },
    },
  },
  plugins: [],
}

