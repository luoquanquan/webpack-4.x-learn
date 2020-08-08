const path = require('path')
const HWP = require('html-webpack-plugin')
const webpack = require('webpack')
const HappyPack = require('happypack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  optimization: {
    // 分割代码块
    splitChunks: {
      automaticNameDelimiter: '-',
      chunks: 'all',
      cacheGroups: {
        common: {
          automaticNamePrefix: 'react-chunks-prefix',
          minSize: 0,
          minChunks: 2,
          name: 'common'
        },
        // 抽离第三方代码
        vender: {
          priority: 1,
          test: /[\\/]node_modules[\\/]/,
          minSize: 0,
          minChunks: 1,
          maxSize: 1024 * 1024,
          minSize: 1024 * 500,
          name: 'vender'
        }
      }
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].chunk.js'
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
  devServer: {
    port: 3000,
    hot: true
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
    new CleanWebpackPlugin(),
    // 打印更新模块的路径
    new webpack.NamedChunksPlugin(),
    // 热更新模块
    new webpack.HotModuleReplacementPlugin()
  ]
}
