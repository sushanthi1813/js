//create a counter in js,counts down from 30 to 0 //used setInterval and clearInterval
let count =5;
function counter(){
    console.log(count);
    count--;
    if(count <0){
        clearInterval(interval);
    }
}
interval = setInterval(counter , 1000)


//time that takes between a settimeout call and the inner function actuallty running
let count =5;
function counter(){
    currtime = Date.now();

    console.log(Math.floor((currtime - starttime) / 1000));
    
    count--;
    if(count <0){
        clearInterval(interval);
    }
}
starttime = Date.now();
interval = setInterval(counter , 1000)


//creating clock
function displayClock() {
    const now = new Date();//gets current datetime
    const hours = String(now.getHours()).padStart(2, '0'); //farmatiing into hours
    const minutes = String(now.getMinutes()).padStart(2, '0'); //formatiing minutes
    const seconds = String(now.getSeconds()).padStart(2, '0'); // formatiing seconds
    console.clear();
    console.log(hours + ":" + minutes + ":" + seconds); 
}

//calling everysecond'
setInterval(displayClock, 1000);