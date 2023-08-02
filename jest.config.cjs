module.exports = {
    roots: ["<rootDir>/src"],
    collectCoverageFrom: [
      "src/**/*.{js,ts}",
      "!src/**/*.d.ts",
      "!src/mocks/**",
    ],
    coveragePathIgnorePatterns: [],
    setupFilesAfterEnv: ["./config/jest/setupTests.js"],
    testEnvironment: "jsdom",
    modulePaths: ["<rootDir>/src"],
    transform: {
      "^.+\\.(ts|js)$": "@swc/jest",
      "^.+\\.css$": "<rootDir>/config/jest/cssTransform.cjs",
      "^(?!.*\\.(js|jsx|mjs|cjs|css|json)$)":
        "<rootDir>/config/jest/fileTransform.cjs",
    },
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\].+\\.(js|mjs|cjs|ts)$",
      "^.+\\.module\\.(css|sass|scss)$",
    ],
    modulePaths: ["<rootDir>/src"],
    moduleNameMapper: {
      "^react-native$": "react-native-web",
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    },
    moduleFileExtensions: [
      // Place tsx and ts to beginning as suggestion from Jest team
      // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
      "ts",
      "web.js",
      "js",
      "web.ts",
      "web.tsx",
      "json",
      "web.jsx",
      "node",
    ],
    watchPlugins: [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname",
    ],
    resetMocks: true,
  };