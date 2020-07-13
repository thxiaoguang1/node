const fs = require('fs')
const express = require('express')
const router = express.Router()
const Students = require("../utiles/students")
router.get('/', (req, res) => {
  Students.find(function (err, students) {
    if (err) {
      return res.status(500).send('server err')
    }
    res.render('index.html', {
      fruits: students.fruits,
      tableList: students.tableList,
    })
  })
})
router.get('/students/new', (req, res) => {
  // console.log(req.body)
  res.render('new.html')
})
router.post('/students/new', (req, res) => {
  Students.save(req.body, function (err) {
    if (err) {
      return res.status(500).send('server err')
    }
    res.redirect('/')
  })
})
router.get('/students/edit', (req, res) => {

  Students.findById(req.query.id, function (err, student) {
    if (err) {
      return res.status(500).send('server err')
    }
    res.render('new.html', {
      student: student
    })
  })
})
router.post('/students/edit', (req, res) => {
  Students.updateById(req.body, function (err) {
    if (err) {
      return res.status(500).send('server err')
    }
    res.redirect('/')
  })
})
router.get('/students/delete', (req, res) => {
  Students.delete(req.query.id, function (err) {
    if (err) {
      return res.status(500).send('server err')
    }
    res.redirect('/')
  })
})
// router.get('/', (req, res) => { })
// router.get('/', (req, res) => { })
module.exports = router