const path = require('path')

module.exports = {
  mode: 'development', // development or production
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // 路径必须是绝对路径
    path: path.resolve(__dirname, 'dist')
  }
}
