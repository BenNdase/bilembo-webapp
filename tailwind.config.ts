const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#272727",
          300: "#272727",
          800: "#272727",
          900: "#272727",
        },
        text: {
          primary: "#272727",
        },
      },
    },
  },
  plugins: [],
});
