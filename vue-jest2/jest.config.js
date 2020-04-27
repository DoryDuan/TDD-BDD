module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  // setupFilesAfterEnv: ["./jest.setup.js"],
  testMatch: ["**/__tests__/**/*.(js|jsx|ts|tsx)"],
  // collectCoverage: true,
  collectCoverageFrom: ["**/*.{vue}", "!**/node_modules/**"]
};
