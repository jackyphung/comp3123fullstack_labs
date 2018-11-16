var moment = require('moment')
var events = require('events');
var eventEmitter = new events.EventEmitter();

var ping = function(){
    console.log("Ping!")
}

var pong = function(){
    console.log("Pong!");
}

eventEmitter
    .on('ping', ping)
    .on('pong',pong);

var handleCounter = function (counter, time){
        console.log(eventEmitter.emit('ping')+"-- Count:" +counter+" Time: "+time);
        console.log(eventEmitter.emit('pong')+"-- Count:" +counter+" Time: "+time);
}

var callbackWait = function(counter, callback){
    let time = moment().format("HH:mm:ss");

    setTimeout(function (){
        callback(counter, time);
    }, 100);
}

for(i=0;i<16;i++){
    callbackWait(i, handleCounter);
}
console.log("Game Over!");