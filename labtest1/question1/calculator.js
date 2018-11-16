var multiplyTwoNumbers = function(x,y){
    if(isNaN(x) && isNaN(y))
        console.log("Not an integer");
    else{
        let z = x*y;
        console.log('multiply '+x+' * '+y+' equals: '+z);
    }
}

var evenDoubler = function(x){
    if(x % 2 == 0){
        let z = x*x;
        console.log('even doubler '+x+' equals: '+z);
    }
    else
    {
        let z = 0;
        console.log("Not even number");
        console.log(z);
    }
}

module.exports= {
    multiplyTwoNumbers: multiplyTwoNumbers,  
    evenDoubler: evenDoubler,
}