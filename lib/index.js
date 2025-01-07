import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslint from "@eslint/js";
import github from "eslint-plugin-github";
import jsdoc from "eslint-plugin-jsdoc";
import node from "eslint-plugin-n";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import promise from "eslint-plugin-promise";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  github.getFlatConfigs().recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  node.configs["flat/recommended"],
  promise.configs["flat/recommended"],
  sonarjs.configs.recommended,
  security.configs.recommended,
  ...github.getFlatConfigs().typescript,
  jsdoc.configs["flat/recommended-typescript-error"],
  comments.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/sort-type-constituents": "error",
      "n/no-unpublished-import": "off",
      "sort-imports": "error",
      "sort-keys": "error",
      "sort-vars": "error",
    },
  },
  {
    extends: [github.getFlatConfigs().browser, github.getFlatConfigs().react],
    files: ["**/*.jsx", "**/*.tsx"],
  },
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
  },
  prettierRecommended,
);
