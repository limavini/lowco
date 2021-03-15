module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        136: "545px",
        175: "700px",
      },
      colors: {
        blue: {
          DEFAULT: "#2D9CDB",
          dark: "#100E1D",
        },
        gray: {
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          4: "#BDBDBD",
          5: "#E0E0E0",
          6: "#F2F2F2",
        },
        green: {
          DEFAULT: "#27AE60",
        },
        red: {
          DEFAULT: "#EB5757",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
