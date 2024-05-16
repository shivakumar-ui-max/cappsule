/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      screens: {
         "2xl": "1440px",
      },
      colors: {
         bg: "hsla(0, 0%, 100%, 1)",
         h1: "hsla(0, 0%, 0%, 1)",
         search: "hsla(210, 49%, 32%, 1)",
         placeHolder: "hsla(187, 48%, 13%, 0.42)",
         bodyTxt: "hsla(0, 0%, 53%, 1)",
         medicine: "hsla(187, 48%, 13%, 1)",
      },
      fontFamily: {
         poppins: ["Poppins", "sans-serif"],
         inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
         search: "2.188rem",
         card: "0.938rem",
         inner: "0.5rem",
      },
      extend: {},
   },
   plugins: [require("tailwindcss"), require("autoprefixer")],
};
