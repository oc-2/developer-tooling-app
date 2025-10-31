// eslint.config.cjs
const js = require("@eslint/js");
const reactHooks = require("eslint-plugin-react-hooks");
const reactRefresh = require("eslint-plugin-react-refresh");

module.exports = [
  {
    // This first element handles global ignores
    ignores: [
      "node_modules/**",
      ".cache/**",
      ".upm/**",
      ".github/**",
      ".git/**",
      ".vscode/**",
      ".husky/**",
      ".local/**",
      ".replit/**",
      "coverage/**",
      "dist/**",
      "build/**",
      "*.log",
    ],

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
  },

  js.configs.recommended,

  {
    files: ["**/*.jsx", "**/*.tsx"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
