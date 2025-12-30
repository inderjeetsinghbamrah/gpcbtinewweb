export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
    	extend: {
    		fontFamily: {
    			poppins: [
    				'Poppins',
    				'sans-serif'
    			],
    			roboto: [
    				'Roboto Condensed',
    				'sans-serif'
    			]
    		},
    		colors: {
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			instituteBrand: 'oklch(67% 0.17 54)',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		keyframes: {
    			pageFlip: {
    				'0%': {
    					transform: 'rotateY(0deg) scale(1)'
    				},
    				'20%': {
    					transform: 'rotateY(-20deg) scale(1)'
    				},
    				'50%': {
    					transform: 'rotateY(-140deg) scale(1.03)'
    				},
    				'65%': {
    					transform: 'rotateY(-140deg) scale(1.03)'
    				},
    				'100%': {
    					transform: 'rotateY(0deg) scale(1)'
    				}
    			}
    		},
    		animation: {
    			pageFlip: 'pageFlip 2.2s cubic-bezier(0.25, 0.1, 0.25, 1) infinite'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};
