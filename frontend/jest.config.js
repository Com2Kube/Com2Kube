module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  testMatch: [
    "<rootDir>/src/__tests__/**/*.{js,jsx}",
    "<rootDir>/src/**/?(*.)(test).{js,jsx}"
  ],
  transform: {
    "^.+\\.(js|jsx)$": "<rootDir>/jest-transformer.js"
  },
  transformIgnorePatterns: ["/node_modules/(?!(react-syntax-highlighter)/)"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js"
  }
}
