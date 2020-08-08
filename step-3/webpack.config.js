const path = require('path')
const HWP = require('html-webpack-plugin')
const webpack = require('webpack')
const HappyPack = require('happypack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    pageA: './src/pageA.js',
    pageB: './src/pageB.js',
  },
  optimization: {
    // 分割代码块
    splitChunks: {
      cacheGroups: {
        common: {
          minSize: 0,
          minChunks: 2,
          chunks: 'initial'
        },
        // 抽离第三方代码
        vender: {
          priority: 1,
          test: /node_modules/,
          minSize: 0,
          minChunks: 2,
          chunks: 'initial'
        }
      }
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    noParse: /jquery/,
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: 'happypack/loader?id=js'
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'js',
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ]
        }
      }]
    }),
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, 'dist', 'manifest.json')
    // }),
    new HWP({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    new CleanWebpackPlugin()
  ]
}
