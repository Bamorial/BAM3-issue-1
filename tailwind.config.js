/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Notable"],
      },
      colors: {
        primary: "#442929",
        digitalBg: "#1D242F",
        digitalTxt: "#00FF0A",
      },
    },
  },
  plugins: [],
};
