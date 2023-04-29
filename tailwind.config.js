module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif', 'ui-sans-serif', 'system-ui'], // Add 'Rubik' font here
      },
    },
  },
  variants: {},
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    rtl: false,
  },
  // plugins: [require("daisyui")],
};
