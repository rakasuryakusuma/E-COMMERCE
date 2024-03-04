/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FBC351",
        secondary: "#FAB21F",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
      },
      container:{
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    },
  },
  plugins: [],
}