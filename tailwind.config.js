/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mint-green': '#73AB84',
        'lt-purple': '#777898',
      }
    },
  },
  plugins: [],
}
