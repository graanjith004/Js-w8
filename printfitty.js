function printFifty(val){
    if (typeof limit !== "number" || limit < 0) {
        throw new Error("Limit must be a positive number");
    }

    for(let i=1;i<=val;i++){
        console.log("The value is ",i);        
    }
}

printFifty(50);