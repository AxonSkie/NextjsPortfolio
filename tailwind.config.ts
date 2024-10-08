import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#50E0FF',
          secondary: '#5AC7F6',
          mywhite: '#FFFFFF',
          background: '#103855',
          dark: '#0D2D44',
          azure:'#4863A0',
          darker:'#001350',
          blackk:'#050505',
        },
        purple: {
          purprim: '#FD7AFF',
          
        },

        red: {
          redprim: '#FF0000',
        }
      },
      fontFamily: {
        advent: ['"Advent Pro"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins' , 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/backgroundN.png')",
        'nezuko-back' : "url('/arts/nezukoback.png')",
        'nezuko-backM' : "url('/arts/nezukobackM.png')",
        
      }
    },
  },
  plugins: [],
};

export default config;
