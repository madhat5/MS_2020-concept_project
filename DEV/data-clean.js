// console.log('sim sim salabim');
"use strict"

const fs = require('fs'),
    querystring = require('querystring'),
    request = require('request'),
    async = require('async'),
        dotenv = require('dotenv');

// Data model
var dataModel = [{
    id: 'string',
    title: 'string',
    topic: 'string',
    year: 1920,
    objectType: 'string'
}];

// CLEAN DATA ====================================================

let json = require('./data/data.json');
// console.log(json[1].response.rows)
let dataObj = json[1].response.rows;
// console.log(dataObj.length);

// clean data
let cleanData = [];

dataObj.forEach((el, i) => {
    // console.log(el)
    // console.log(i)

    // Turn dates array years into integers
    let cleanYear = el.content.indexedStructured.date
    // console.log(cleanYear);

    // cleanYear.forEach((yr, index) => {
    //     if (yr === 'undefined') {
    //         console.log('err')
    //     }
    //     console.log(i)
    //     // console.log(parseInt(yr, 10))
    //     // yr.replace(/s/,"");
    // });

    cleanData.push({
        id: el.id,
        title: el.title,
        topic: el.content.indexedStructured.topic,
        // year: el.content.date[0].content, DON'T USE?
        // year: cleanYear,
        year: el.content.indexedStructured.date,
        objectType: el.content.indexedStructured.object_type
    });
});

function writeFile(fsName, fsData) {
    fs.writeFileSync('data/' + fsName + '.json', JSON.stringify(fsData));
    console.log('*** *** *** *** ***');
    console.log('writeFile complete for', fsName);
};

writeFile('cleanData', cleanData);