export default {
  source: ["src/themes/tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/themes/build/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: "src/themes/build/",
      files: [
        {
          destination: "tokens.ts",
          format: "typescript/variables",
        },
      ],
    },
  },
};
