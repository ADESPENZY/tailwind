/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const rotateY = plugin(function({ addUtilities }){
  addUtilities({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    },
  })
})

// Custom plugin for backface-visibility
const backfaceVisibility = plugin(function({ addUtilities }) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    },
  });
});

// Custom plugin for text animations
const textAnimations = plugin(function({ addUtilities, theme }) {
  addUtilities({
    '.fade-in': {
      animation: 'fadeIn 1s ease-in-out forwards',
    },
    '.slide-up': {
      animation: 'slideUp 1s ease-in-out forwards',
    },
    '@keyframes fadeIn': {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    '@keyframes slideUp': {
      '0%': { transform: 'translateY(20px)', opacity: 0 },
      '100%': { transform: 'translateY(0)', opacity: 1 },
    },
  });
});




module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-primary": '#01051e',
        "color-primary-light": '#020726',
        "color-primary-dark": '#010417',
        "color-secondary": '#ff7d3b',
        "color-gray": '#333',        
        "color-white": '#fff',
        "color-blob": '#A427DF',
      }
    },
  },
  plugins: [rotateY, backfaceVisibility, textAnimations],
}

