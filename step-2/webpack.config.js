const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'sourcemap',
  entry: {
    home: './src/index.js'
  },
  watch: false,
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
  devServer: {
    // 配置代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '/api': ''
        }
      }
    },
    before(app) {
      app.get('/user', (request, response) => {
        response.json({name: 'quanquan - before'})
      })
    }
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
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './docs', to: 'docs' }
      ],
    }),
    new webpack.BannerPlugin('圈圈制作')
  ]
}
