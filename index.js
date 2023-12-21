console.log("hello, world")

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sound/:name', function (req, res) {
  const { name } = req.params
  console.log(name)

  if (name == 'dog') {
    res.json('{"sound":"멍멍"}')
  } else if (name == 'cat') {
    res.json('{"sound":"야옹"}')
  } else if (name == 'pig') {
    res.json('{"sound":"꿀꿀"}')
  } else if (name == 'yuri') {
    res.json('{"sound":"유리다아옹"}')
  } else {res.json({"sound":"알수없음"})}


})




app.listen(3000)
