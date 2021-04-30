module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        wkred: "#bbb",
        wkorange: "#bbb",
        wkyellow: "#bbb",
        wkpink: "#bbb",
        wkviolet: "#bbb",
        wkblueviolet: "#bbb"
        // wkred: "#F77579",
        // wkorange: "#F9A06A",
        // wkyellow: "#F1C56D",
        // wkpink: "#F1609C",
        // wkviolet: "#BC4CC3",
        // wkblueviolet: "#8F3DBD"
      },
      width: {
        '480': "30rem"
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
