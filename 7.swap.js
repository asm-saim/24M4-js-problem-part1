//swap values using temp method:
let a=5;
let b=7;
console.log(a,b);

let temp=a;
a=b;
b=temp;
console.log(a,b);

//-----------------------------------

//Destructuring method:

let x=10;
let y=20;
[x,y]=[y,x];
console.log(x,y);