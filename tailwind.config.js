/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      // TODO set base font
    },
    extend: {
      colors: {
        main: "#824CFB",
        second: "#493FC8",
        success: "#1794C9",
        warning: "#EFAF31",
        error: "#C92E4B"
      }
    }
  },
  plugins: [],
}
