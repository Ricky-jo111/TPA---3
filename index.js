
let listMovie = document.getElementById("list-movie")
const img = "https://image.tmdb.org/t/p/w500"
let search = document.getElementById('searchinput');


function fetchAll(){
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=6585f85a6001577a80630a9fc6d49114")
    .then(result => result.json()
    ).then(data => {
        console.log(data.results)
        showMovies(data.results);
    })
}
fetchAll();


search.addEventListener('change', (event) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=6585f85a6001577a80630a9fc6d49114&query=${event.target.value}&page=1`)
    .then(result => result.json()
    ).then(data => {
        if(data.results !== undefined){
            showMovies(data.results);
        }else {
            fetchAll();
        }
     
    })

})

function deleteAllMovies(){
    while(listMovie.hasChildNodes()){
        listMovie.removeChild(listMovie.firstChild)
    }
}
function showMovies(data) {

    deleteAllMovies();
    data.forEach((item, index) => {
        listMovie.innerHTML +=
            `<div class="card">
                <img src="${img}/${item.poster_path}" alt="${item.title}" width="300"/>
                <p>${item.title}</p>
            
        </div>`
        

    })
}