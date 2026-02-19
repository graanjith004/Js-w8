//Write a function sum(a, b)
// It should return the sum of two numbers
let m;
function sum(a,b){
    const isValid = n => typeof n === 'number' && Number.isFinite(n);
if(isValid(a)&& isValid(b)){
    let total=a+b;    
console.log(`The final value is ${total}`)
return total;
}
else{
    console.log(`Please enter the correct input`);  
    return;  
}
}
sum(5 ,6);