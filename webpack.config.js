const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production', // development or production
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // 路径必须是绝对路径
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 处理 @import 语法
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  overrideBrowserslist: [
                    "IE 10"
                  ]
                }),
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          // 把 css 作为 style 标签添加到 head 中
          {
            loader: 'style-loader',
            options: {}
          },
          // 处理 @import 语法
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: {
        removeAttributeQuotes: true,
      },
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  // 开发服务配置
  devServer: {
    port: 3000,
    progress: true,
    // 静态文件服务托管的目录, 默认是当前目录
    contentBase: './dist',
    // gzip
    compress: false
  }
}
