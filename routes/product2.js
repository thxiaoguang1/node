var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
    code: 200,
    data: { name: 'aaa', pwd: '123' },
    isSuccess: true,
    msg: '请求成功'
  }
  res.send(data)
})

module.exports = router
