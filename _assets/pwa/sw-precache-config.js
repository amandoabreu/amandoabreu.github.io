module.exports = {
    navigateFallback: '/index.html',
    stripPrefix: 'dist',
    root: 'dist/',
    staticFileGlobs: [
        'dist/index.html',
        'assets/js/**.js',
        'assets/css/**.css',
        'assets/images/**',
        'assets/fonts/**'
    ],
};
