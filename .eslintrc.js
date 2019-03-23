module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugin: ['react'],
    rules: {
        'react/prop-types': ['off'],
    },
};