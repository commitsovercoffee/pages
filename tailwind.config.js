/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				crimson: "'Crimson Pro Variable', sans-serif "
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
