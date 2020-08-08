import React from 'react'
import ReactDOM from 'react-dom'
const calc = require('./calc').default

ReactDOM.render(<h1>1 + 2 = {calc.sum(1, 2)}</h1>, document.getElementById('app'))
