#! /usr/bin/env node

// 1. 找到当前执行命令的路径, 找到配置文件
const path = require('path')

const config = require(path.resolve('webpack.config.js'))

const Comliler = require('../lib/comliler')
const comliler = new Comliler(config)
comliler.run()
