const express = require('express')

const app = express()

const Router = require('./express')

app.use('/abc', Router)

app.listen(3000, () => {
  console.log('port 3000')
})
