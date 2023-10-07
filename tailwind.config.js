/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-black': '#212124',
        'white-text': '#B4B6BB',
        'sexy-green': '#468A5D',
        'white-strokes': '#6A6A6A',
        'blue-linkedin': '#5F87C7',
        'red-google': '#BD3C3C',
        'green-orcid': '#3CBD70'
      }
    },
  },
  plugins: [],
}

