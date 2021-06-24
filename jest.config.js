module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: [["<rootDir>/globals.d.js"]],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
};
