/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html", "components/*.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: "'Plus Jakarta Sans', sans-serif",
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [],
};
