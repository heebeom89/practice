// @ts-check

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  const id = req.query
  res.send(id)
})

module.exports = router
