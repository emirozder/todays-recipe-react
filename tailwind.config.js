import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gummy: ["Sour Gummy", "sans-serif"],
      }
    },
  },
  plugins: [
    daisyui,
  ],
}