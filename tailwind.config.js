module.exports = {
  content: [
    "*",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '130': '37rem',
        '240': '68rem',
        'px-2': '2px'
      },
      colors: {
        'primary-1': '#FFD2F7',
        'primary-2': '#FFF0FD',
        'secondary-1': '#942780'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

