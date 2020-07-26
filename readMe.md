## webpack sys learn

### loader

特点: loader 功能单一, 当使用单个 loader 时, 可以使用字符串语法, 当处理某个模块需要使用多个 loader 时, 就需要使用数组了, 当需要给 loader 传参时, 字符串型配置需要参数字符串, 数组类型的配置需要改写成对象成员格式. ex: [{loader: 'xxx-loader', options: {}}]

执行顺序: 当多个 loader 时, 执行的顺序是从右向左

#### 样式处理

`style-loader`: 把 css 作为 style 标签添加到 html 的 head 标签中

`css-loader`: 解析 **@import**(css 原生支持的模块化) 语法

`less-loader`: 配合 `less` 处理 less 语法 `less -> css`


