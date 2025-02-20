import { default as nesting } from 'tailwindcss/nesting';
import { default as forms } from '@tailwindcss/forms';
import { default as autoprefixer } from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [nesting, autoprefixer, forms],
};
