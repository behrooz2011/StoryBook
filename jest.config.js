// module.exports = {
//   testEnvironment: "jsdom", // Use jsdom for testing React components
//   moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
//   testPathIgnorePatterns: ["/node_modules/", "/build/"],
//   transform: {
//     "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Use Babel to transpile your tests
//   },
// };

export default {
  testEnvironment: "jsdom", // Use jsdom for testing React components
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Use Babel to transpile your tests
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMocks.ts", // Mock CSS imports
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Add this line to include the setup file
};
