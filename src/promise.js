// @ts-check

function setTimeoutPromise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('11111'), ms)
  })
}

async function star(age) {
  if (age > 20) return `${age} is`
  return `${age} is not`
}

async function aaa() {
  console.log('await전')
  await setTimeoutPromise(1000).then((value) => {
    //await 쓰면 promise의 resolve가 호출될 때까지 기다립니다. 그래서 aaa함수 진행이 멈추고 then에서 1이 먼저 뜨고 aaa가 뜬다.
    console.log(value)
  })
  star(22).then((value) => console.log(value))
  setTimeoutPromise(10).then((value) => {
    console.log(value)
  })
  console.log('aaaaa')
}

aaa()
