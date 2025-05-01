/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#0f172a', 
        },
        text: {
          DEFAULT: '#1f2937', 
          dark: '#f1f5f9', 
        },
        primary: {
          DEFAULT: '#4f46e5',
          dark: '#f1f5f9', 
        },
        secondary: {
          DEFAULT: '#4f46e5',
          dark: '#f1f5f9', 
        },
      },
    },
  },
  plugins: [],
}

