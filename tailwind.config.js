module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                'other': { 'min': '320px', 'max': '1200px' }
            }
        },
    },
    plugins: [],
}