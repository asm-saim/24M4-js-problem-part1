//type 1 :inch to feet (75 -> 6.25 feet)
function inchToFeet(inch){
    let convertFeet=inch/12;
    return convertFeet;
}
let data=inchToFeet(75);
console.log(data+' feet');

//type 2 inch to feet conversion but output result would be feet and inch separately.

function inchFeet(value){
    let toFeet=value/12;
    let result1=parseInt(toFeet);
    let toInch= value % 12;
    let totalRes=result1 + ' feet ' + toInch +' inch' 
    return totalRes;
}
let finalResult = inchFeet(75);
console.log(finalResult);


// miles to kilometer
function milesToKilo(input){
    const kmResult=input * 1.60934;
    return kmResult;
}
const final_km=milesToKilo(200);
console.log(final_km,'km');

//grams to kg
function gmToKg(input){
    const newResult= input * 0.001;
    return newResult;
}
const final_kg=gmToKg(400);
console.log(final_kg, 'Kg');



