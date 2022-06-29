module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-unused-vars": "off",
        "no-empty": [
            "error",
            {
                "allowEmptyCatch": true
            }
        ],
        "array-bracket-spacing": "error",
        "arrow-spacing": "error",
        "block-spacing": "error",
        "comma-spacing": "error",
        "computed-property-spacing": "error",
        "func-call-spacing": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "object-curly-spacing": "error",
        "switch-colon-spacing": "error",
        "template-curly-spacing": "error",
        "template-tag-spacing": "error",
        "yield-star-spacing": "error"
    }
}
