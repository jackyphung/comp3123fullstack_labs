const http = require('http');
const url = require('url');
var events = require('events');
var eventEmitter = new events.EventEmitter();

const hostname = '127.0.0.1';
const port = 3000;

var n;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Slot Machine\n');
  if (req.url == '/spin'){
    console.log('spinning..');
    if(n == 'max')
      eventEmitter.emit('jack');
    else if(n != 'max')
      console.log('amount lost: ' +n);
  }
  else if(req.url.includes('/play')){
    let query = url.parse(req.url, true).query;
    n = query.amount;
    console.log('playing.. amount: '+query.amount);
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var jp = function(){
  console.log('Jackpot!');
}

eventEmitter.on('jack', jp);
