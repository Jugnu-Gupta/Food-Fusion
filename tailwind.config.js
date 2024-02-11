/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        'trans-right': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' }
        },
      },
      animation: {
        'trans-right': 'trans-right 1s linear infinite'
      },
      screens: {
        'sm': { 'min': '540px', 'max': '1200px' },
        'xs': { 'min': '0px', 'max': '540px' },
      },
      colors: {
        "orange": "#ED7D31",
        "lightBrown": "#6C5F5B",
        "darkBrown": "#4F4A45",
        "light": "#F6F1EE",
      },
    },
    plugins: [],
  }
}

