import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/eslint-recommended"),
    {
        plugins: {
            "@typescript-eslint": typescriptEslint,
        },

        languageOptions: {
            globals: {
                Atomics: "readonly",
                SharedArrayBuffer: "readonly",
            },

            parser: tsParser,
        },

        rules: {
            indent: ["error", 4, {
                SwitchCase: 1,
            }],

            "linebreak-style": ["error", "unix"],
            quotes: ["error", "double"],
            semi: ["error", "never"],
            "no-unused-vars": "off",

            "no-empty": ["error", {
                allowEmptyCatch: true,
            }],

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
            "yield-star-spacing": "error",
        },
    },
];