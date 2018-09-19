function getCurrentDateAndTime(){
    var today = new Date();
    var date = today.getFullYear()+'-'+today.getMonth()+'-'+today.getDate();
    var time = today.getHours()+':'+today.getMinutes();
    console.log('Current Date: '+date+' Current Time: '+time);
}


getCurrentDateAndTime();

