module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      tiny: ["20px"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
