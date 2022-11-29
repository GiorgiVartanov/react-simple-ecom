const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            poppins: ["poppins", "Arial", "sans-serif"],
        },
        screens: {
            xs: "500px",
            ...defaultTheme.screens,
        },
        extend: {
            keyframes: {
                slideDown: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                expand: {
                    "0%": { scale: "0.95", opacity: "0" },
                    "100%": { scale: "1", opacity: "1" },
                },
                wiggle: {
                    "0%, 100%": { transform: "rotate(-4deg)" },
                    "50%": { transform: "rotate(4deg)" },
                },
            },
            animation: {
                slideDown: "slideDown 0.25s ease-out",
                expand: "expand 0.25s ease-out",
                wiggle: "wiggle 0.2s ease-in-out",
            },
        },
    },
    plugins: [],
};
