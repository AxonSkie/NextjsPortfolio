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
      },
      fontFamily: {
        advent: ['"Advent Pro"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/backgroundN.png')"
        
      }
    },
  },
  plugins: [],
};

export default config;
