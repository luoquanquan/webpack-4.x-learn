import React from 'react'
import ReactDOM from 'react-dom'
import calc from './calc'

ReactDOM.render(<h1>1 + 2 = {calc.sum(1, 2)}</h1>, document.getElementById('app'))
