module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'airbnb-base'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        'func-names': ['error', 'as-needed'],
        'object-shorthand': ['error', 'properties'],
        'space-before-function-paren': ['error', 'never'],
        indent: ['error', 4],
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'never']
    }
}
