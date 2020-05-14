module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '__tests__/lib',
    'src/askscript/__tests__/.*/_environment.ts', // these are definitions of environments
    'src/askscript/__tests__/.*/.*.out.tsx', // these are sample output files
    'src/askscript/__tests__/.*/.*.result.tsx', // these hold expected result from running .ask files
    'src/askscript/__tests__/tools/*', // there are test-related tools
  ],
};
