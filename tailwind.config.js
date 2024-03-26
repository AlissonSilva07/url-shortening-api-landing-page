/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "cyan": "#2acfcf",
        "dark-violet": "#3b3054",

        // Secondary
        "red-10": "#f46262",

        //Neutral
        "gray-10": "#bfbfbf",
        "grayish-violet": "#9e9aa7",
        "very-dark-blue": "#35323e",
        "very-dark-violet": "#232127"
      }
    },
  },
  plugins: [],
}