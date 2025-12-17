export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily:{
                poppins:['Poppins', 'sans-serif'],
                roboto:['Roboto Condensed', 'sans-serif'],
            },
            colors: {
                primary: '#2563eb',
                instituteBrand:"oklch(67% 0.17 54)"// or whatever brand color you want
            },
            keyframes: {
                pageFlip: {
                    "0%":   { transform: "rotateY(0deg) scale(1)" },
                    "20%":  { transform: "rotateY(-20deg) scale(1)" },
                    "50%":  { transform: "rotateY(-140deg) scale(1.03)" },
                    "65%":  { transform: "rotateY(-140deg) scale(1.03)" },
                    "100%": { transform: "rotateY(0deg) scale(1)" },
                },
            },
            animation: {
                pageFlip: "pageFlip 2.2s cubic-bezier(0.25, 0.1, 0.25, 1) infinite",
            },
        },
    },
    plugins: [],
};
