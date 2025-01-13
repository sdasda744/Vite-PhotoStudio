/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        screens: {
            // Small Screens (Tablets, 481px - 768px)
            sm: '480px',
            // Medium Screens (Large Tablets, 769px - 1024px)
            md: '768px',
            // Large Screens (Desktops, 1025px - 1440px)
            lg: '1024px',
            // Extra Large Screens (Large Desktops, >1440px)
            xl: '1280px',
            // Ultra Wide Screens (>2560px)
            '2xl': '2560px',
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        extend: {
            backgroundImage: {
                "hero-01": "url('./img/hero-01.jpg')",
                "hero-02": "url('./img/hero-02.jpg')",
                "gradient-45":
                    " linear-gradient(45deg, #F4A261 6%, #F95454 55%)",
            },
        },
        fontFamily: {
            popPin: ["Poppins", "serif"],
            lemon: ["Lemon", "serif"]
        },
    },
    plugins: [require("flowbite/plugin")],
};
