// console.log('sim sim salabim');
"use strict"

const fs = require('fs'),
    querystring = require('querystring'),
    request = require('request'),
    async = require('async'),
        dotenv = require('dotenv');

// Data model
var dataModel = [{
    topic: 'string',
    year: 1920,
    objectType: 'string'
}];

// GET DATA ====================================================

// API key
dotenv.config();
const API_KEY = process.env.SMITH_KEY;
const API_URL = 'https://api.si.edu/openaccess/api/v1.0/search'
const searchTerm = `unit_code:"NMAAHC"`;

// // array that we will write into
let dataArray = [];

function dataSearch() {
    let apiRequest = API_URL + "?api_key=" + API_KEY + "&q=" + searchTerm;

    request(apiRequest, (err, res, body) => {
        if (err) {
            throw err;
        }
        // console.log(res.body)

        let apiData = JSON.parse(res.body);
        dataArray.push(apiData);
        // console.log(dataArray);
        writeFile()
    });
}

function writeFile() {
    fs.writeFileSync('data/data.json', JSON.stringify(dataArray));
    console.log('*** *** *** *** ***');
    console.log('writeFile complete');
};

dataSearch();