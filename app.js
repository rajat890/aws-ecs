//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Final the CICD of JENKINS and GIT is working fine')
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('app listening on port 8080!')
})
