// Creating a Date:
let now=new Date();
console.log(now);

//Getting Date Parts:
//Watch out! getMonth() starts from 0, so May = 4, not 5.

let date=new Date();
console.log(date.getFullYear()); 
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay()); 


//Getting time parts
console.log('Getting time parts');
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

//Setting Date
// set methods return milliseconds, not a readable date!
date.setFullYear(2027);
date.setMonth(2);
date.setDate(10);
console.log(date.toDateString());


//Useful Methods:

date.toDateString();    // "Sat May 30 2026"
date.toTimeString();    // "10:30:00"
date.toLocaleDateString(); // "5/30/2026"
date.toString();        // full date and time as string
Date.now();             // milliseconds since Jan 1 1970


//Example:
let currentDate=new Date();
console.log("Year: ",currentDate.getFullYear());
console.log("Month: ",currentDate.getMonth()+1);
console.log("Date: ", currentDate.getDate());


