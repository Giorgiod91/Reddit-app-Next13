const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "src", "<appDir>/", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig);
