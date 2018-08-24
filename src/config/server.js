const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

consign()
  .include('/src/api/boletos')
  .then('/src/api/sandbox')
  .into(app)

module.exports = app