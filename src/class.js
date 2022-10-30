// @ts-check
/* eslint-disable no-restricted-syntax */

/** 
  * @typedef person
  
  * @property {number} age
  * @property {string} city
  * @property {string | string[]} [pet]
 */

/** @type {person[]} */
const people = [
  {
    age: 34,
    city: '서울',
    pet: ['dog', 'cat'],
  },
  {
    age: 27,
    city: '부산',
    pet: 'dog',
  },
  {
    age: 40,
    city: '대구',
  },
  {
    age: 33,
    city: '대구',
    pet: 'cat',
  },
]
/**
 * {
 *    "서울": {
 *      "dog" : 2,
 *      "cat" : 1,
 *    },
 *    "대구" : {
 *    "dog" : 1,
 *    "cat" : 1,
 *    },
 *
 *
 *
 * }
 *
 *
 *
 */

/** @typedef {Object.<string, Object.<string, number>>} PetOfCities */

function solveB() {
  /** @type {PetOfCities} */
  const result = {}

  for (const person of people) {
    const { city, pet: petOrPets } = person
    if (petOrPets) {
      const petsOfCity = result[city] || {}
      console.log(petsOfCity)
      if (typeof petOrPets === 'string') {
        const pet = petOrPets

        const origNumPetsOfCity = petsOfCity[pet] || 0
        petsOfCity[pet] = origNumPetsOfCity + 1
      } else {
        for (const pet of petOrPets) {
          const origNumPetsOfCity = petsOfCity[pet] || 0
          petsOfCity[pet] = origNumPetsOfCity + 1
        }
      }
      // 위 petsOfCity[pet]부분에서 어떻게든 로테이션을 돌려서 값을 넣어줄 것이다.
      result[city] = petsOfCity
    }
  }
  return result
}

console.log('solveB', solveB())

// function solveA() {
//   const cities = []
//   for (const person of people) {
//     if (person.age > 30) {
//       if (!cities.find((city) => person.city === city)) {
//         cities.push(person.city)
//       }
//     }
//   }
//   return cities
// }

// function modernSolveA() {
//   const allCities = people
//     .filter(({ age }) => age > 30)
//     .map((person) => person.city)
//   const set = new Set(allCities)
//   return Array.from(set)
// }

// const a = [4, 5, 6, 3]
// const result = a.find(function (value) {
//   return value == 6
// })

// const re = a.find((value) => value > 4)

// console.log(result)
// console.log(re)

// const result = ''
// if (!result) {
//   console.log('a')
// } else {
//   console.log('b')
// }
