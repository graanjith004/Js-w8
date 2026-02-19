let arrList=[10,20,30,40,50]
function sumof(arry){
let total=0;
    if (!Array.isArray(arry)) {
        throw new Error("Input must be an array");
    }
    
for(let i=0;i<arry.length;i++){
    total+=arry[i];
}

    console.log(`The value of the array ${total}`);
}

sumof(arrList);