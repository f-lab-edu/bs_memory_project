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
      keyframes: {
        loaderSM: {
          '0%': {
            boxShadow: '20px 0 #000, -20px 0 #0002',
            background: '#000',
          },
          '33%': {
            boxShadow: '20px 0 #000, -20px 0 #0002',
            background: '#0002',
          },
          '66%': {
            boxShadow: '20px 0 #0002,-20px 0 #000',
            background: '#0002',
          },
          '100%': {
            boxShadow: '20px 0 #0002,-20px 0 #000',
            background: '#000',
          },
        },
        loaderLG: {
          '0%': {
            boxShadow: '40px 0 #000, -40px 0 #0002',
            background: '#000',
          },
          '33%': {
            boxShadow: '40px 0 #000, -40px 0 #0002',
            background: '#0002',
          },
          '66%': {
            boxShadow: '40px 0 #0002,-40px 0 #000',
            background: '#0002',
          },
          '100%': {
            boxShadow: '40px 0 #0002,-40px 0 #000',
            background: '#000',
          },
        },
        loaderMobileLG: {
          '0%': {
            boxShadow: '30px 0 #000, -30px 0 #0002',
            background: '#000',
          },
          '33%': {
            boxShadow: '30px 0 #000, -30px 0 #0002',
            background: '#0002',
          },
          '66%': {
            boxShadow: '30px 0 #0002,-30px 0 #000',
            background: '#0002',
          },
          '100%': {
            boxShadow: '30px 0 #0002,-30px 0 #000',
            background: '#000',
          },
        },
      },
      animation: {
        loaderSM: 'loaderSM 1s infinite linear alternate',
        loaderLG: 'loaderLG .8s infinite linear alternate',
        loaderMobileLG: 'loaderMobileLG .8s infinite linear alternate',
      },
    },
  },
  plugins: [
    nesting,
    autoprefixer,
    forms,
    plugin(function ({ addBase, addComponents, theme }) {
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

      const errorMessageSizes = {
        base: {
          fontSize: { base: '18px', mobile: '16px' },
          iconSize: { base: '22px', mobile: '22px' },
        },
        lg: {
          fontSize: { base: '18px', mobile: '16px' },
          iconSize: { base: '28px', mobile: '28px' },
        },
        xl: {
          fontSize: { base: '36px', mobile: '20px' },
          iconSize: { base: '40px', mobile: '24px' },
        },
      };

      const errorMessageComponents = {};

      for (const [key, size] of Object.entries(errorMessageSizes)) {
        errorMessageComponents[`.errorMessage-${key}`] = {
          display: 'flex',
          width: '100%',
          justifyItems: 'center',
          color: 'oklch(55.1% 0.027 264.364)',
          fontWeight: '500',
          fontSize: size.fontSize.base,
          lineHeight: '2',
          '> * + *': {
            marginLeft: '0.75rem',
          },
          '@screen mobile': {
            fontSize: size.fontSize.mobile,
          },
          '.retryIcon': {
            color: 'rgb(2 132 199 / var(--tw-text-opacity, 1))',
            width: size.iconSize.base,
            height: size.iconSize.base,
            '@screen mobile': {
              width: size.iconSize.mobile,
              height: size.iconSize.mobile,
            },
          },
        };
      }

      addComponents(errorMessageComponents);
    }),
  ],
};
