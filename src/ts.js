// @ts-check

// const objs = [{
//     {
//         foo: {
//             bar:{
//                 baz:1,
//             }
//         }
//     },
//     {},
//     {
//         foo:{}
//     },
// }]

// const aa = {
//   a: {
//     b: {
//       c: 2,
//     },
//   },
//   k: { c: 2 },
// }
// const { a, k } = aa
// console.log({ a })

// function sum(arguments) {
//   return rest.reduce((pre, cur) => pre + cur, 0)
// }

// function sum2(...rest) {
//   return rest.reduce(function (a, b) {
//     return a + b
//   })
// }
// console.log(sum2(1, 2, 3))

// function test(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, timeout)
//   })
// }

// test(100).then((value) => console.log(value))

// function te() {
//   return new Promise((resolve, resject) => {
//     setTimeout(() => {
//       const a = 2
//       resolve(a)
//     }, 1000)
//   })
// }
// te().then((value) => console.log(value))

// setTimeout(te, 1000)

// let a
// setTimeout(function () {
//   a = te()
//   console.log(a)
// }, 1000)

// async function te() {
//   return 2
// }
// te().then((value) => console.log(value))
// setTimeout(() => {
//   const a = 2
//   return a
// }, 1000)

const aa = {
  a: {
    b: {
      c: 2,
    },
  },
  k: { c: 2 },
}
const { a } = aa
console.log({ a })

const obj = {
  posts: [
    {
      id: 'test',
      title: 'na',
      content: 'blabla',
    },
    {
      id: 'A',
      title: 'who',
      content: 'am I',
    },
  ],
}

console.log(typeof obj)
console.log(JSON.stringify(obj))
console.log(typeof JSON.stringify(obj))
const c = JSON.stringify(obj)
console.log(typeof JSON.parse(c))
