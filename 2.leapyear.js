//type 1: if a number is divisible by 4, then it will be a leap year.

function leapYear(number){
    if(number % 4 === 0)
    {
        return true;
    }
    else{
        return false;
    }
}
const isLeapYear=leapYear(2025);
console.log(isLeapYear);

//Type 2:
//if the number is not divisible by 100 and number is divisible by 4 , then leap year and if the number is divisible by 400, then the number will be a leapYear.

function isGenuineLeapYear(input){
    if(input%100!==0 && input%4===0)
    {
        return true;
    }
    else if(input%400===0)
    {
        return true;
    }
    else{
        return false;
    }
}
let result1=isGenuineLeapYear(2020);
let result2=isGenuineLeapYear(2052);
console.log(result1, result2);