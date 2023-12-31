 /** @type {import('tailwindcss').Config} */
 export default {
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
     extend: {},
  },
  plugins: [],
 }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   purge: ["./src/components/**/*.tsx", "./pages/**/*.tsx"],
//   theme: {
//       extend: {},
//   },
//   variants: {},
//   plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
// };