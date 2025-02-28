import { default as nesting } from 'tailwindcss/nesting';
import { default as forms } from '@tailwindcss/forms';
import { default as autoprefixer } from 'autoprefixer';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DEB841',
        secondary: '#37323E',
        danger: '#D22E1D',
        disabled: '#aaaaaa',
        greyBlue: '#4F5B67',
        greyDarkblue: '#242D35',
      },
      screens: {
        mobile: { max: '767px' },
        tablet: '768px',
        pc: '1280px',
      },
    },
  },
  plugins: [
    nesting,
    autoprefixer,
    forms,
    plugin(function ({ addBase, theme }) {
      const mobile = theme('screens.mobile', { max: 'max' });
      const tablet = theme('screens.tablet', {});
      const pc = theme('screens.pc', {});

      addBase({
        '.responsiveContainer': {
          [`@media (max-width: ${mobile.max})`]: {
            maxWidth: '340px',
          },
          [`@media (min-width: ${tablet})`]: {
            maxWidth: '750px',
          },
          [`@media (min-width:${pc})`]: {
            maxWidth: '1200px',
          },
          margin: '0 auto',
        },
      });
    }),
  ],
};
