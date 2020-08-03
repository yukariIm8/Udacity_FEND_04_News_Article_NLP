let path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
let bodyParser = require('body-parser')
let cors = require('cors')

dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

// Call Sentiment Analysis
// let textapi = new meaningCloud({
//    application_key: process.env.API_KEY
// });

const app = express()

app.use(cors())

// to use json
app.use(bodyParser.json())

// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('/dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse)
})
