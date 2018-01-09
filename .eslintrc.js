module.exports = {
  extends: 'standard',
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    "node": true
  },
  // required to lint *.vue files
  plugins: [
    'html', "standard"
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions //允许无参数的箭头函数。
    'arrow-parens': true,
    // 允许   异步  等待
    // allow async-await
    'generator-star-spacing': 0,
    //禁止直接使用 Object.prototypes 的内置属性
    "no-prototype-builtins": 0,
    // allow debugger during development 
    //在开发期间允许调试器。
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 强制使用有效的 JSDoc 注释
    "valid-jsdoc": 1,
    "space-before-function-paren": 0,
    "no-inner-declarations": 0,
    "no-extend-native": 0 // 可以使用扩展方法
  }
}
