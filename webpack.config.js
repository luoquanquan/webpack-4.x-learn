const path = require('path')

module.exports = {
  mode: 'development', // development or production
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // 路径必须是绝对路径
    path: path.resolve(__dirname, 'dist')
  },
  // 开发服务配置
  devServer: {
    port: 3000,
    progress: true,
    // 静态文件服务托管的目录, 默认是当前目录
    contentBase: './dist',
    // gzip
    compress: true
  }
}
