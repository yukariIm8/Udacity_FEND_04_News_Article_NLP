let path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const fetch = require("node-fetch");
let bodyParser = require('body-parser')
let cors = require('cors')

dotenv.config();

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
app.listen(3000, function () {
    console.log('NLP app listening on port 3000!')
})

/*
app.get('/test', function (req, res) {
    res.json(mockAPIResponse)
})
*/

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = process.env.API_KEY
const output = '&of=json';
const text = '&txt=';
const model = '&model=general';
const lang = '&lang=en'; 

const analyzeTxt = async (req, res) => {
    let txt = req.body.name;
    console.log(txt)
    console.log(baseURL+apiKey+output+text+txt+model+lang);
    const resultPromise = await fetch(baseURL+apiKey+output+text+txt+model+lang)
    .then((response) => { // Extract JSON payload.
        return response.json();
    })
    .then((json) => {
        console.log(json);
    })
    .then((data) => {
        res.send(data);
    })
    .catch((error) => {
        console.log('something went wrong: ', error.message);
    })
};

// const analyzeTxt = async (req, res) => {
//     let txt = req.body.name;
//     console.log(txt)
//     console.log(baseURL+apiKey+output+text+txt+model+lang);
//     const resultPromise = await fetch(baseURL+apiKey+output+text+txt+model+lang)
//     .then((response) => { // Extract JSON payload.
//         return response.json();
//     })
//     .then((json) => {
//         console.log(json);
//     })
//     .catch((error) => {
//         console.log('something went wrong: ', error.message);
//     })
// };

app.post('/analyzeTxt', analyzeTxt);

/*
app.post('/analyzeTxt', function (req, res) {
    res.send(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&txt=${formTxt}&model=general&lang=en`)
})
*/