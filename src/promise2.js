// @ts-check
function setTimeoutPromise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms)
  })
}

async function fetchAge(id) {
  await setTimeoutPromise(1000)
  console.log(`${id} 사원 데이터 받아오기 완료!`)
  return (Math.random() * 20, 10) + 25
}

async function startAsyncJobs() {
  const promises = []
  for (let i = 0; i < 10; i++) {
    promises.push(fetchAge(i))
  }
  const ages = await Promise.all(promises) // Promise.all 함수는 인자로 Promise의 배열을 받으며 하나의 특별한 Promise를 새로 생성합니다.
  // 이 Promise는 배열로 받은 모든 비동기 작업이 성공했따면 내부적으로 resolve를 호출하며, 하나라도
  // 비동기 작업이 실패한다면 reject를 호출합니다.

  console.log(
    `평균 나이는? ==> ${
      ages.reduce((prev, current) => prev + current, 0) / ages.length
    }`
  )
}

startAsyncJobs()
