const a = require('./a')
require('./index.css')
require('./index.less')

const fn = () => {
  console.log('function fn ~')
}

fn()

console.log(a)
