const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

app.listen(port, function(err) {
    if(err) return console.log(err)
    console.log('Server listening on port ' + port)
})