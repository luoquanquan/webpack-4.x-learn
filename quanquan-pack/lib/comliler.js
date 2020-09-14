const path = require('path')
const fs = require('fs')

class Comliler {
  constructor(config) {
    this.config = config

    // 保存入口文件的路径
    // 保存所有的模块依赖
    this.entryId // ./src/index.js
    this.modules = {}
    this.entry = config.entry
    // 工作路径
    this.root = process.cwd()
  }

  getSource(modulePath) {
    const source = fs.readFileSync(modulePath, 'utf8')
    return source
  }

  // 解析源码 AST
  parse(source, parentPath) {
    console.log(`当前时间 ${Date.now()}: debug 的数据是 source, parentPath: `, source, parentPath)
  }

  buildModule(modulePath, isEntry) {
    // 模块内容
    const source = this.getSource(modulePath)

    // 模块 id modulePath - this.root
    const moduleName = './' + path.relative(this.root, modulePath)

    if (isEntry) {
      this.entryId = moduleName
    }

    // 需要把 source 源码改造
    const {sourceCode, dependencies} = this.parse(source, path.dirname(moduleName))

    this.modules[moduleName] = sourceCode
  }

  emitFile() {

  }

  // 执行
  run() {
    // 创建模块的依赖关系
    this.buildModule(path.resolve(this.root, this.entry), true)

    // 创建一个打包后的文件
    this.emitFile()
  }
}

module.exports = Comliler
