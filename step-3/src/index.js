import ext from './ext'

console.log(ext)

if(module.hot) {
  module.hot.accept('./ext.js', () => {
    const ext = require('./ext').default
    console.log(ext)
  })
}
