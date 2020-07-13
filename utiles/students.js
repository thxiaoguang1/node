const fs = require('fs')
const { stringify } = require('querystring')
exports.find = function (callback) {
  fs.readFile('./json/list.json', 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data))
  })
}
exports.save = function (student, callback) {
  fs.readFile('./json/list.json', 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    const fruits = JSON.parse(data).fruits
    const tableList = JSON.parse(data).tableList
    student.id = parseInt(tableList[tableList.length - 1].id + 1)
    tableList.push(student)
    const resList = JSON.stringify({
      fruits: fruits,
      tableList: tableList
    })
    fs.writeFile('./json/list.json', resList, function (err) {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}
exports.findById = function (id, callback) {
  fs.readFile('./json/list.json', 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    const fruits = JSON.parse(data).fruits
    const tableList = JSON.parse(data).tableList
    const ret = tableList.find(function (item) {
      return item.id === parseInt(id)
    })
    callback(null, ret)
  })
}
// 更新列表
exports.updateById = function (student, callback) {
  fs.readFile('./json/list.json', 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    const fruits = JSON.parse(data).fruits
    const tableList = JSON.parse(data).tableList
    const ret = tableList.find(function (item) {
      return item.id === parseInt(student.id)
    })
    student.id = parseInt(student.id)
    for (const key in student) {
      ret[key] = student[key]
    }
    const resList = JSON.stringify({
      fruits: fruits,
      tableList: tableList
    })
    fs.writeFile('./json/list.json', resList, function (err) {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}
exports.delete = function (id, callback) {
  fs.readFile('./json/list.json', 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    const fruits = JSON.parse(data).fruits
    const tableList = JSON.parse(data).tableList
    const ret = tableList.findIndex(function (item) {
      return item.id === parseInt(id)
    })
    tableList.splice(ret, 1)
    console.log(tableList)
    const resList = JSON.stringify({
      fruits: fruits,
      tableList: tableList
    })
    fs.writeFile('./json/list.json', resList, function (err) {
      if (err) {
        return callback(err)
      }
      callback(null)
    })
  })
}