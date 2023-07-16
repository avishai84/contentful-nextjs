const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/app/$1',
    // '^@/(.*)$': '<rootDir>/app/$1',
    // '^@dog/(.*)$': '<rootDir>/app/dog/$1',
    // '^@pages/(.*)$': '<rootDir>/app/pages/$1',
  },
//   import Dog from '@dog/Dog';
// import HomePage from '@pages/HomePage';
}

process.env.CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
process.env.CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
