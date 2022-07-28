# Init
```bash
npm install -g ts-node typescript ts-lib @types/node

npm i --save-dev jest typescript ts-jest @types/jest
npx ts-jest config:init
npm run tsc -- --init 
npm install --save-dev jest
```

# Test setup
https://kulshekhar.github.io/ts-jest/

jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

# Reference: 
https://comdy.vn/typescript/