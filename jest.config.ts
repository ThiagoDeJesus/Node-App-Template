/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
  },
  preset: "ts-jest",
  testMatch: ["**/**/*.spec.ts", "**/**/**/*.spec.ts"],
}
