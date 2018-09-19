var events = require('events');
var eventEmitter = new events.EventEmitter();

var fn = function(){
    console.log('call me.');
}

var fn2 = function(){
    console.log('123-456-7890');
}

eventEmitter
    .on('call', fn)
    .on('num',fn2);
eventEmitter.emit('call');
eventEmitter.emit('num');