import React from 'react'
import ReactDOM from 'react-dom'
const calc = require('./calc').default

const a = 1
const b = 2
const c = 3

console.log(a + b + c)
ReactDOM.render(<h1>1 + 2 = {calc.sum(1, 2)}</h1>, document.getElementById('app'))
