// const { mainModule } = require("process");

// const { count } = require('console')

// const http = require('http')

// const server = http.createServer((req, res) => {
//   req.statusCode = 200
//   res.end('hello')
// })

// const PORT = 4000
// server.listen(PORT, () => {
//   console.log(`server is running ${PORT}`)
// })

/*eslint-disable*/
// var numCounters = 0

// function getCounter() {
//   numCounters += 1

//   var result = { count: count, total: 0 }
//   function count() {
//     result.total += 1
//   }
//   return result
// }

// var counterA = getCounter()
// counterA.count()
// counterA.count()

// var counterB = getCounter()
// counterB.count()

// console.log(counterA.total, counterB.total, numCounters)

function Person(name) {
  this.name = name
}

Person.prototype.greet = function greet() {
  return `hi ${this.name}`
}

function Student(name) {
  this.__proto__.constructor(name)
}

Student.prototype.study = function study() {
  return `${this.name} is studying`
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student('Yang')
console.log(me.greet())
console.log(me.study())

// function Student(name) {
//   this.name = name
// }

// Student.prototype.study = function study() {
//   return `${this.name} is studying`
// }
// const me = new Student('Yang')
// console.log(me.study())
