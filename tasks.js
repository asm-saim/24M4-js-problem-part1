// js-problems-part1-practice-tasks
// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celToFer(input) {
    const toFahrenheit = input * 32;
    const output = toFahrenheit + " fahrenheit"
    return output;
}
const res = celToFer(5);
console.log(res);

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5
// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25
// output: 0


function countDuplicate(input, find) {
    let count = 0;
    for (let i of input) {
        if (i === find) {
            count++;
        }
    }
    return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
const result = countDuplicate(numbers, 11);
console.log(result);



// Task-3:
// Write a function to count the number of vowels in a string.
function vowelHunt(search) {
let count = 0;
const vowel = ['a', 'e', 'i', 'o', 'u'];
const allLower=search.toLowerCase();

 for(let str of allLower)
 {
    if(vowel.includes(str))
    {
        count++;
    }
 }
 return count;

}
const output = vowelHunt('orange');
console.log(output);

// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longestStr(input){
    let len='';
    const words=input.split(' ');
    // console.log(words);
for(let word of words)
{
    if(word.length>len.length)
    {
        len=word;
    }
}
return len;
}
const finalOutput=longestStr("I am learning Programming to become a programmer");
console.log(finalOutput);

// Task-5:
// Generate a random number between 10 to 20.

// const ran=Math.random(20);
// const intRandom=ran*20;
// const ranResult=Math.round(intRandom);
// console.log(ranResult);

function ranNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(ranNumber(20, 10));