var handleCounter = function(result){
    console.log('The callback count is '+result);
}

var callbackLoop = function(n, callback){
    for (let i = 1; i <= n; i++)
        console.log('The callback count is '+i);
    console.log('*** exiting callbackLoop *****');
}

callbackLoop(5, handleCounter);
callbackLoop(2, handleCounter);
callbackLoop(7, handleCounter);