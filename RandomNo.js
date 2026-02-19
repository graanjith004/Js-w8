// Write a function getRandom(min, max)
// It should return a random number between min & max


function getRandome(min,max){
   
    let result=Math.floor(Math.random()*(max-min+1)+min);
       
    console.log(`Get Random Value ${result}`)
}

getRandome(2,6)