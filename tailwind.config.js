/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      background: '#fefae0',
      secondary: '#739b46',
      primary: {
        100: '#f7ebe5',
        200: '#e9d2c3',
        300: '#dbb8a0',
        400: '#cd9f7e',
        500: '#bc6c25', // Base color
        600: '#a36020',
        700: '#8b541b',
        800: '#724816',
        900: '#5a3b11',
      },
      secondary_light: '#606c38',
      primary_light: '#dda15e'
    },
  },
  plugins: [],
};
