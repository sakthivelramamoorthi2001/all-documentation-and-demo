/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./src/**/**/*.jsx", "./src/*.jsx"],
  theme: {
    minWidth: {
      xs: "481px",
    },
    extend: {
      minWidth: {},
      colors: {},
      height: {},
    },
  },
  plugins: [],
};
