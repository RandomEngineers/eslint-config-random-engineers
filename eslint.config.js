import eslintPlugin from "eslint-plugin-eslint-plugin";
import randomEngineers from "@randomengineers/eslint-config-random-engineers";

export default [
  ...randomEngineers,
  eslintPlugin.configs["flat/recommended"],
  {
    rules: {
      "importPlugin/no-unresolved": "off",
    },
  },
];
