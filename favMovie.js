let movieList=["vadaChennai","Drishyam","Rabnae bada jodi","arya2","kgf"]

function favoriteMovie(movieList){
    if (movieList.length > 0 ) {
        throw new Error(`please select the movie list`);
    }
for(let i=0;i<movieList.length;i++){
    console.log(`The movie list is ${movieList[i]}`);    
}
}

favoriteMovie(movieList)