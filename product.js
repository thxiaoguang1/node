const express = require('express')
const router = require("./router/router")
const bodyParser = require('body-parser')
const app = express()
app.use('/node_modules/', express.static('./node_modules'))
app.use('/public/', express.static('./public'))
app.engine('html', require('express-art-template'))

// 配合post
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)
app.listen(3000, () => {

})