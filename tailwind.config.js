/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink":  "#ff4b2b"
      }
    },
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
}

