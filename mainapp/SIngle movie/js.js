// https://api.themoviedb.org/3/search/movie?api_key=d7c5c7eca687ff8ab7a714827d938782&query=Jack+Reacher

fetch("https://api.themoviedb.org/3/search/movie?api_key=d7c5c7eca687ff8ab7a714827d938782&query=Jack+Reache")
.then(response => {
    return response.json()
})

function loadData() {
    var movieName = document.getElementById("movieName");
    movieName.textContent = "CheeseBurgers!";
}