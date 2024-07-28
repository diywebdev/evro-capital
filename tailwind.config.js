/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "1rem"
		},
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans]
		},
		extend: {}
	},
	plugins: []
};
