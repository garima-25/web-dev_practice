// console.log("Hello, I am running js using script tag")

const searchInput  = document.querySelector("#search-input")
const movieCards = document.querySelectorAll(".movie-card")
console.log(movieCards)

searchInput.addEventListener("input", function(){
    const searchValue = searchInput.value;
    console.log(searchValue)

    movieCards.forEach(function(card){
        
    })

})
// const card = movieCards.forEach(function(card){
//     document.querySelector()
// })