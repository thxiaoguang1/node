const express = require('express')
const app = express()
app.post('/a', (req, res) => {
  res.send('hello word')
})
app.get('/', (req, res) => {
  res.send('hello word')
})
app.listen(3001, function() {
  console.log('node server start port at 3000')
})
