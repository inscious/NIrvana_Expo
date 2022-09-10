/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "theme-rose": "#FC486B",
                "theme-orange": "#FC652F",
                "theme-yellow": "#FAEC00",
                "theme-blue": "#1F58C9",
            },
        },
    },
    plugins: [],
};
