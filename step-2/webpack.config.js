const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'sourcemap',
  entry: {
    home: './src/index.js'
  },
  watch: true,
  watchOptions: {
    // 每秒问我 1e3 次
    poll: 1e3,
    // 防抖, 500ms 内多次触发不打包
    aggregateTimeout: 500,
    // 忽略
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'home.html'
    }),
  ]
}