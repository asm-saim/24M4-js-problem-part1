const names=['Safiq', 'Wasi','Mikail', 'Safiq', 'Hamid', 'Wasi'];
const numbers=[2,44,3,22,55,3, 77, 2, 77];
let unique=[];
function noDuplicates(input){
    for (let i of input)
    {
        if(unique.includes(i)===false)
        {
            unique.push(i);
        }
    }
    return unique;
}
const result=noDuplicates(names);
console.log(result);