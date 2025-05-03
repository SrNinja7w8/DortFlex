/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'minha-bl': 
        ['bl', "sans-serif"]
      },
    },
  },
  plugins: [],
}

