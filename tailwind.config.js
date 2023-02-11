/** @type {import('tailwindcss').Config} */
const tailwindCSSAnimista = require("tailwindcss-animistacss")
module.exports = {
  content: ["./src/**/*.{html,js,vue,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    tailwindCSSAnimista({
      classes: ['animate__tracking-in-expand'],
      settings: {
        'animate__tracking-in-expand': {
          duration: 7000,
          //delay: 1000,
          iterationCounts: 1,
          isInfinite: false,
        }, // sigue mas configuracion de la clase puesta.
      },
      variants: ["responsive"]
      //variants: ['responsive', 'hover', 'focus'],
    }),

  ],
}
