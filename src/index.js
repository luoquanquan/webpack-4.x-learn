import "core-js";
const a = require('./a')
require('./index.css')
require('./index.less')

const fn = () => {
  console.log('function fn ~')
}

fn()

@log
class A {
  a = 1
  // 等同于
  // constructor() {
  //   this.a = 1
  // }
}
const tempa = new A()
console.log(tempa)

function log(target) {
  console.log(`当前时间 ${Date.now()}: debug 的数据是 target: `, target)
}

console.log(a)
