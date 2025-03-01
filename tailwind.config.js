/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#aa6d6b',
        brandDark:'#033046'
      },
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
        verdala:['Varela Round', 'sans-serif'],

      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'2rem',
          lg:'3rem',
          xl:'4rem',
         '2xl':'6rem',
        },
      },
    },
  },
  plugins: [],
}

