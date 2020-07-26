## webpack sys learn

### loader

特点: loader 功能单一, 当使用单个 loader 时, 可以使用字符串语法, 当处理某个模块需要使用多个 loader 时, 就需要使用数组了, 当需要给 loader 传参时, 字符串型配置需要参数字符串, 数组类型的配置需要改写成对象成员格式. ex: [{loader: 'xxx-loader', options: {}}]

执行顺序: 当多个 loader 时, 执行的顺序是从右向左

### 样式处理

`style-loader`: 把 css 作为 style 标签添加到 html 的 head 标签中
`css-loader`: 解析 **@import**(css 原生支持的模块化) 语法
`less-loader`: 配合 `less` 处理 less 语法 `less -> css`
`mini-css-extract-plugin`: 提取 css 文件为单独文件, 不打包到 js 模块中
```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    },
  ]
},
plugins: [
  new MiniCssExtractPlugin({
    filename: 'main.css'
  })
]
```
`postcss-loader`: `css-loader` 前, 用于预处理 css
`autoprefixer`: postcss-loader 插件, 为 css 属性前缀
`optimize-css-assets-webpack-plugin`: 压缩 css 的插件, 因为使用该插件压缩 css 需要重写 `optimization > minimizer`, 导致 webpack 自带的 js 压缩能力失效, 所以需要引入 js 压缩.
`uglifyjs-webpack-plugin`: 压缩 js 文件的插件, 压缩 js 前需要先利用 babel 将 es6+ 语法转码
`terser-webpack-plugin`: 压缩 js 文件的插件, 支持 es6+ js 文件直接压缩

### js 文件处理

#### babel 转化 es6+ 语法到浏览器可执行的版本

`babel-core`: babel 核心代码库, 实现了 js 转码的能力
`babel-loader`: webpack 辅助工具, 用与实现 webpack 和 `babel-core` 的链接
`babel-plugin/xxx`: babel 插件, 用于转化某个 es6+ 语法的新特性
`babel-presets`: babel 插件的预设, 相当于是一个插件的集合
`@babel/plugin-proposal-decorators`: 类装饰器语法转码 [文档](https://babel.docschina.org/docs/en/next/babel-plugin-proposal-decorators)
`@babel/plugin-proposal-class-properties` 类属性转码 [文档](https://babel.docschina.org/docs/en/babel-plugin-proposal-class-properties)
