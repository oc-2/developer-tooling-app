// eslint.config.cjs
const js = require("@eslint/js");
const reactHooks = require("eslint-plugin-react-hooks");
const reactRefresh = require("eslint-plugin-react-refresh");
const reactApp = require("eslint-config-react-app"); // CRA base config
const reactAppJest = require("eslint-config-react-app/jest"); // CRA Jest config

module.exports = [
  {
    // Global ignores
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
  },

  {
    files: ["**/*.js"],
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

  {
    files: ["**/*.test.js", "**/*.spec.js", "**/__tests__/**/*.js"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        jest: "readonly",
      },
    },
    ...reactAppJest, // adds CRA Jest rules
  },

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
    ...reactApp, // adds CRA React rules
  },

  js.configs.recommended,
];
