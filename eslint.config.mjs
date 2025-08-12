// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import cypress from "eslint-plugin-cypress";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Ignore common output dirs
  { ignores: ["node_modules/", "dist/", "build/", "coverage/"] },

  // Node/CommonJS app code
  {
    files: ["**/*.js", "**/*.cjs"],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: { ...globals.node }
    }
  },

  // ESM files (like this config or any .mjs)
  {
    files: ["**/*.mjs", "eslint.config.mjs"],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.node }
    }
  },

  // Jest unit tests
  {
    files: ["spec/**/*.js", "**/*.spec.js", "**/__tests__/**/*.js", "jest.config.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: { ...globals.node, ...globals.jest }
    }
  },

  // Cypress e2e tests
  {
    files: ["cypress/**", "cypress.config.js"],
    plugins: { cypress },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,   // describe, it, before, after
        cy: "readonly",
        Cypress: "readonly",
        expect: "readonly",
        assert: "readonly"
      }
    },
    rules: {
      ...cypress.configs.recommended.rules

    }
  }
]);




