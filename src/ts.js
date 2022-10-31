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
