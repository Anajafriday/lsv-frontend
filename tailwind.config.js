/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}", // All HTML files in the public directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E76A35",
        secondary: "#C4E1A4",
        miscellanous: "#ECECD5",
        miscell: "#C4A77B",
        accentTextLight: "#F8F8FF",
        accentTextDark: "#0B0B0B",
      },
      fontFamily: {
        opensans: `"Open Sans", sans-serif`,
        playfair: `"Playfair", serif`,
      },
      lineHeight: {
        "custom-30": "30px",
      },
    },
  },
  plugins: [],
};
