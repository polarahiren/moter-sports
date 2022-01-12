module.exports = {
    mode: 'jit',
    purge: [
        './src/scss/**/*.scss',
        './public/**/*.html',
    ],
    theme: {
        container: {
            padding: '1rem',
        },
        extend: {
            colors: {
                'primary': '#b70000',
                'cool-gray': '#686868',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
