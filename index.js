var config = require('./config/config');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Hello World! ${config.NAME}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})