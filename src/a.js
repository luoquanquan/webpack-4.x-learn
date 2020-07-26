class B {

}

const b = new B()

function * gen (params) {
  yield 1
}

console.log(b)

console.log(gen().next())

'1234'.includes('1')

module.exports = 'a.js'
