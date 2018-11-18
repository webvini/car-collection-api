const express = require('express')

const config = require('./config')
const brands = require('./brands')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/brands', (req, res) => {
  const allBrands = brands.getAll()

  allBrands.then(result => {
    res.send(result)
  }).catch(error => {
    res.send(error)
  })
})

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`)
})