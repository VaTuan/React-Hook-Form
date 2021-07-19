module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#bf1650",
        secondary: {
          100 : "#ff7aa8",
          200: "#ec5990"
        },
        // setup custom color , has DEFAULT
        indigo: {
          light: "#b3bcf5",
          DEFAULT: "#5c6ac4",
        },
        sidebar : '#191d3a'
      },
      fontFamily: {
        body: ['"Lato"'],
        "body-bold": ['"Lato Bold"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
