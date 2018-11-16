var fs = require('fs');
var zlib = require('zlib');

var gzip=zlib.createGzip();

const inp = fs.createReadStream('output.txt');
const out = fs.createWriteStream('output.txt.gz');

inp.pipe(gzip).pipe(out);

var stream = fs.createReadStream("output.txt");

stream.pipe(fs.createWriteStream("output.txt.gz"));
