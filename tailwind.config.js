/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'twenty': "15vh",
        'button': "40px",
        'eighty': "75vh"
      },
      width:{
        'thirty': "35vw",
        'button': "40px"
      }
    },
  },
  plugins: [],
}