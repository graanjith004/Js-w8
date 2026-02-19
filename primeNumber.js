// Write a function isPrime(num)
// Return true if the number is prime, else false

function isPrime(num){
 if(num<=1){
    console.log(`Its not prime number`);  
    return;
 }
 
 for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i===0){
      console.log(`Its not prime number`);  
      return; 
    }
 }
    console.log(`Its prime number`);    

}

isPrime(3)