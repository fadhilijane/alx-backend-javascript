## ALX Backend JavaScript Project

### Concepts
For this project, we expect you to look at these concepts:
- JavaScript programming
- Software Linter

### Resources
Read or watch:
- [ECMAScript 6 - ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://medium.com/@kevinlai76/javascript-es6-iterables-and-iterators-b8bada262d4)

### Learning Objectives
At the end of this project, you should be able to explain to anyone, without the help of Google:
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

### Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported

### Setup
1. **Install NodeJS 12.11.x**
    ```sh
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```
    Verify the installation:
    ```sh
    node -v
    # v12.11.1
    npm -v
    # 6.11.3
    ```

2. **Install Jest, Babel, and ESLint**
    In your project directory, install Jest, Babel, and ESLint by using the supplied `package.json` and running:
    ```sh
    npm install
    ```

### Configuration Files
Add the following configuration files to your project directory:

**`package.json`**
```json
{
  "name": "alx-backend-javascript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "lint": "eslint .",
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "@babel/core": "^7.11.1",
    "@babel/preset-env": "^7.11.0",
    "babel-jest": "^26.3.0",
    "eslint": "^7.6.0",
    "jest": "^26.4.0"
  }
}
```

**`babel.config.js`**
```js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
  ],
};
```

**`.eslintrc.js`**
```js
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ec
