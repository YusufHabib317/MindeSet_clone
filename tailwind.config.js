/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FA73A3",
        grey: "#F3F5F8",
        dark: "#36353A",
        hover_link: "#939498",
        hover_btn: "#F6B3CD",
        p_grey_dark: "#616262",
        p_grey_light: "#616262",
        bg_dark: "#36353A",
      },
      screens: {
        ss: "480px",
        sm: "600px",
        md: "768px",
        lg: "1099px",
        xl: "1300px",
      },
    },
  },
  plugins: [],
};
