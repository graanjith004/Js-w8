// Reverse an array in JavaScript

// let marks=[98,87,139,456,45];
let marks=["Apple","Banana","Cherry"];
let result=[];

function reverseArr(arrVal){
for(let i=arrVal.length-1;i>=0;i--){
result.push(arrVal[i]);
}
return result;
}

let output=reverseArr(marks)
console.log("The real reverse array is", output);
console.log(`The reverse array is [${output}]`);