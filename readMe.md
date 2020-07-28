## webpack sys learn

## 第一阶段

### loader

特点: loader 功能单一, 当使用单个 loader 时, 可以使用字符串语法, 当处理某个模块需要使用多个 loader 时, 就需要使用数组了, 当需要给 loader 传参时, 字符串型配置需要参数字符串, 数组类型的配置需要改写成对象成员格式. ex: [{loader: 'xxx-loader', options: {}}]

执行顺序: 当多个 loader 时, 执行的顺序是从右向左

#### 分类

- `expose-loader`:暴露全局的 loader / 内联的 loader
- `pre`: 前置 loader
- `normal`: 普通 loader
- `inline`: 内联 loader
- `post`: 后置 loader

### 样式处理

- `style-loader`: 把 css 作为 style 标签添加到 html 的 head 标签中
- `css-loader`: 解析 **@import**(css 原生支持的模块化) 语法
- `less-loader`: 配合 `less` 处理 less 语法 `less -> css`
- - `mini-css-extract-plugin`: 提取 css 文件为单独文件, 不打包到 js 模块中
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
- `postcss-loader`: `css-loader` 前, 用于预处理 css
- `autoprefixer`: postcss-loader 插件, 为 css 属性前缀
- `optimize-css-assets-webpack-plugin`: 压缩 css 的插件, 因为使用该插件压缩 css 需要重写 `optimization > minimizer`, 导致 webpack 自带的 js 压缩能力失效, 所以需要引入 js 压缩.
- `uglifyjs-webpack-plugin`: 压缩 js 文件的插件, 压缩 js 前需要先利用 babel 将 es6+ 语法转码
- `terser-webpack-plugin`: 压缩 js 文件的插件, 支持 es6+ js 文件直接压缩

### js 文件处理

#### babel 转化 es6+ 语法到浏览器可执行的版本

- `babel-core`: babel 核心代码库, 实现了 js 转码的能力
- `babel-loader`: webpack 辅助工具, 用与实现 webpack 和 `babel-core` 的链接
- `babel-plugin/xxx`: babel 插件, 用于转化某个 es6+ 语法的新特性
- `babel-presets`: babel 插件的预设, 相当于是一个插件的集合
- `@babel/plugin-proposal-decorators`: 类装饰器语法转码 [文档](https://babel.docschina.org/docs/en/next/babel-plugin-proposal-decorators)
- `@babel/plugin-proposal-class-properties` 类属性转码 [文档](https://babel.docschina.org/docs/en/babel-plugin-proposal-class-properties)
- `@babel/plugin-transform-runtime` & `@babel/runtime`: 用来重用 babel 注入 js 文件中的代码, 解决 callCheck 定义多次的问题 [文档](https://babeljs.io/docs/en/babel-plugin-transform-runtime#docsNav)
- `@babel/polyfill`: 垫片 [文档](https://www.npmjs.com/package/@babel/polyfill)
- `core-js`: [github](https://github.com/zloirock/core-js)
- `expose-loader`: The expose-loader loader allows to expose a module (in whole or in part) to global object (self, window and global).
- `webpack.ProvidePlugin`: 在每个模块中注入指定模块
```js
new webpack.ProvidePlugin({
  $: 'jquery'
})
```

### 全局变量(第三方库)引入的方法

- `expose-loader` 暴露模块到 window 上
- `ProvidePlugin` 给每个模块提供一个局部变量
- 通过 cdn 引入, 并配置 `externals` 实现第三方库的外部化

### 图片打包

#### 三种方案

- js 创建图片并引入(file-loader 回拷贝图片, 并把生成图片的路径返回回来)
- css background-image 引入
- img 标签

### sourceMap

- `sourcemap`: 生成独立的 map 文件, 能标识当前报错的行和列
- `eval-source-map`: 不会产生单独文件, 但是可以显示出报错的行和列
- `cheap-module-source-map`: 不会产生列, 单独的映射文件
- `cheap-module-eval-source-map`: 不会生成单独文件, 不会产生列

### 常用插件

- `clean-webpack-plugin`: 清理生成代码
- `copy-webpack-plugin`: 拷贝插件
- `BannerPlugin`: 文件头部
