var max = 50;

var handleCounter = function (err, counter, waitTime, timestamp){
    if(err)
        console.log(err.message);
    else
        console.log("Callback counter: "+counter+" Time: "+waitTime+" TimeStamp: "+timestamp);
}

var callbackWait = function(counter, callback){
    var waitTime = Math.floor(Math.random() * (max + counter));
    var timestamp = new Date(Date.now()).toLocaleString;

    if(waitTime > max){
        callback(new Error('Wait time cannot be greater than max time.'),null, null, null);
        return;
    }
    setTimeout(function (){
        callback(null, counter, waitTime, timestamp);
    }, waitTime);
}

for(var i = 0; i < 10; i++){
    callbackWait(i, handleCounter);
}