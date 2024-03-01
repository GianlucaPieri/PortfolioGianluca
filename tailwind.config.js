/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#12C0E6',
        secondary: '#363636'
        
      },

      backgroundImage:{
        
        bgHome : "url('/public/media/BackG.png')",
        bgCard : "url('/public/media/Card.png')",
        bgFigma : "url('/public/media/Figma.png')",
        bgSkill : "url('/public/media/Skille.png')",
        bgPex : "url('/public/media/Pex.png')",
        bgCards : "url('/public/media/SfondoC.png')",
        bgDrone : "url('/public/media/drone2.png')",
        bgAdv : "url('/public/media/adve.png')",



      }
    },
  },
  plugins: [],
}
