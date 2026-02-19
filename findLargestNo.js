// find the largest number in an array

let marks=[98,87,139,456,45];
let largeVal=marks[0];

function largestNo(markVal){
console.log(`The value of list ${markVal}`);
for(let i=1;i<=markVal.length-1;i++){
    let currentVal=markVal[i];
    if(currentVal>largeVal){
        largeVal=currentVal;
    }
}
return largeVal;
}

let result=largestNo(marks);
console.log(`The largest number is ${result}`);

