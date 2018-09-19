var request = require('request');

var fs = require('fs');

request('http://www.google.ca').pipe(fs.createWriteStream('output.html'))