/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'mulish': ["Mulish",  "sans-serif"],
      'nunito': ["Nunito",  "sans-serif"],
    },
  },
  plugins: [],
}

