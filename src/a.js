class B {

}

const b = new B()

function * gen(params) {
  yield 1
}

console.log(gen().next())

module.exports = 'a.js'
