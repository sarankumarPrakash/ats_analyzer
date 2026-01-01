export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "theme": '#302727', // Preserving preserving theme color from index.css logic
            }
        },
    },
    plugins: [],
}
