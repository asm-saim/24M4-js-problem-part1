function oddAvg(inputs) {
    let oddArray = [];
    for (const input of inputs) {
        if (input % 2 !== 0) {
            oddArray.push(input);
        }
    }

    //part-2
    let sum = 0;
    for (let odd of oddArray) {
        sum = sum + odd;
    }
    console.log('sum is ', sum);
    console.log('Array length is', oddArray.length)
    avg=sum/oddArray.length;
    return avg; 
}
const numbers = [22, 45, 234, 62, 33, 11, 23]
const result = oddAvg(numbers);
console.log('Avg: ',result);