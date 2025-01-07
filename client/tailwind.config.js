/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  		},
  		colors: {
			"purple-300":'#5046e4',
			"purple-200":"#6a62e1",
			"purple-100":"#827ce6"
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

