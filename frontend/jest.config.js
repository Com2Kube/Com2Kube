module.exports = {
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  setupFilesAfterEnv: ["./src/setupTests.js"],
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.jsx?$": "<rootDir>/jest.transform.js"
  },
  snapshotSerializers: ["enzyme-to-json"]
}
