// style-dictionary.config.js
const StyleDictionary = require("style-dictionary");

/**
 * Format for CSS variables
 */
StyleDictionary.registerFormat({
  name: "css/variables",
  formatter: function (dictionary) {
    return `:root {\n${dictionary.allProperties
      .map((prop) => `  --${prop.name}: ${prop.value};`)
      .join("\n")}\n}\n`;
  },
});

/**
 * Format for TypeScript variables
 */
StyleDictionary.registerFormat({
  name: "typescript/variables",
  formatter: function (dictionary) {
    return `/**
 * Auto-generated file. Do not edit directly.
 */
export const tokens = {
${dictionary.allProperties
  .map((prop) => `  ${prop.name}: '${prop.value}',`)
  .join("\n")}
};\n`;
  },
});

module.exports = {
  source: ["src/themes/tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/themes/build/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    ts: {
      transformGroup: "js",
      buildPath: "src/themes/build/",
      files: [
        {
          destination: "tokens.ts",
          format: "typescript/variables",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
};
