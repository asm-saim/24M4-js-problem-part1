//For mathematics calculation we use Math object,

//min
const num_min=Math.min(22,45,22,5,77,88);
console.log(num_min);

//max
const num_max=Math.max(57,88,33,14,77);
console.log(num_max);

//Round, floor, ceil:
console.log(Math.round(2.55));  //make the number to the nearest integer number
console.log(Math.floor(2.95));  // make it the low integer number
console.log(Math.ceil(2.11));  //make it the high integer number

//PI
console.log(Math.PI);
console.log(Math.abs(50-55)); //find the difference between numbers

//random: gives a random number from 0 to .10

console.log(Math.random());

//Lets make it a integer number.
const ran=Math.random()*10;
const final_random=Math.round(ran);
console.log(final_random);
