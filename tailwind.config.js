/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'new4': "repeat(auto-fit, minmax(300px, 1fr))"
      }
    },
  },
  plugins: [],
}