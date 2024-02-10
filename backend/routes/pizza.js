const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')

router.get('/', async (request, response) => {
  try {
    const statement = `
            SELECT id, name, details, image, price
            FROM pizza
        `
    const [result] = await db.execute(statement, [])
    response.send(utils.createSuccess(result))
  } catch (ex) {
    response.send(utils.createError(ex))
  }
})

module.exports = router
