module.exports = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.(md|mdx)$": "jest-transformer-mdx",
  },
};
