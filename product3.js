function get (url) {
  return new Promise(function (resolve, reject) {
    const data = 'gg'
    resolve(url + data)

  })
}


get('a').then(function (data) {
  console.log(data);

  return get('cc')
})
  .then(function (data) {
    console.log(data)
  })

