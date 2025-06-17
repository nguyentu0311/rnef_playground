/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  presets: [require('nativewind/preset')],
  theme: {
    fontSize: {
      'xs': ['var(--fs-xs)', {lineHeight: 'var(--lh-xs)'}],
      'sm': ['var(--fs-sm)', {lineHeight: 'var(--lh-sm)'}],
      'base': ['var(--fs-base)', {lineHeight: 'var(--lh-base)'}],
      'lg': ['var(--fs-lg)', {lineHeight: 'var(--lh-lg)'}],
      'xl': ['var(--fs-xl)', {lineHeight: 'var(--lh-xl)'}],
      '2xl': ['var(--fs-2xl)', {lineHeight: 'var(--lh-2xl)'}],
      '3xl': ['var(--fs-3xl)', {lineHeight: 'var(--lh-3xl)'}],
      '4xl': ['var(--fs-4xl)', {lineHeight: 'var(--lh-4xl)'}],
      '5xl': ['var(--fs-5xl)', {lineHeight: 'var(--lh-5xl)'}],
      '6xl': ['var(--fs-6xl)', {lineHeight: 'var(--lh-6xl)'}],
    },
    width: Object.fromEntries(
      Array.from({length: 1000}, (_, i) => [`${i + 1}`, `var(--w-${i + 1})`])
    ),
    height: Object.fromEntries(
      Array.from({length: 1000}, (_, i) => [`${i + 1}`, `var(--h-${i + 1})`])
    ),
    margin: Object.fromEntries(
      Array.from({length: 1000}, (_, i) => [`${i + 1}`, `var(--w-${i + 1})`])
    ),
    padding: Object.fromEntries(
      Array.from({length: 1000}, (_, i) => [`${i + 1}`, `var(--w-${i + 1})`])
    ),
    extend: {
      height: Object.fromEntries(
        Array.from({length: 1000}, (_, i) => [
          `w-${i + 1}`,
          `var(--wh-${i + 1})`,
        ])
      ),
    },
  },
  plugins: [],
};
