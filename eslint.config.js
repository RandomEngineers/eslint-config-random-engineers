import eslintPlugin from "eslint-plugin-eslint-plugin";
import randomEngineers from "./lib/index.mjs";

export default [...randomEngineers, eslintPlugin.configs["flat/recommended"]];
