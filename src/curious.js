// @ts-check

const fs = require('fs')

const data = async () => {
  const buffer = await fs.promises.readFile('database.json')
  return JSON.parse(buffer.toString('utf-8')).posts
}

data()

data().then((value) => console.log(value))
