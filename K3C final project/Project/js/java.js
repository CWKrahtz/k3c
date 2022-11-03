// preloader

window.onload = function () {
    setTimeout(function () {
        document.getElementById("loadText").innerHTML = "Welcome to K3C STREAMING";
    }, 1000)
    setTimeout(function(){
        document.getElementById("loading-section").className = "fade-out";
    }, 2500)
    setTimeout(function () {
        document.getElementById("loading-section").style.display = "none";
    }, 3000)
}

// 


$(document).ready(function () {

    var movieData = null;
    var randomMovie = Math.floor(Math.random() * 500);
    var movieURL = "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&sort_by=revenue.desc&page=" + randomMovie;

    $.ajax({
        type: "GET",
        //getting the movie info
        url: movieURL,
        success: function (data) {
            //allocating data
            movieData = data;
            console.log(data);
        }
    }).done(function () {
        for (var i = 1; i < 19; i++) {
            //trying to display the images
            $("#moviePoster" + i).attr("src", "https://image.tmdb.org/t/p/original/" + movieData.results[i].poster_path);
            $("#movieTitle" + i).text(movieData.results[i].title)
            $("#movieRelease" + i).text(movieData.results[i].release_date);
        }
    });

    //Carousel API
    var popMovieURL = "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&primary_release_date.gte=2022-01-01&page=1"
    $.ajax({
        type: "GET",
        //getting the movie info
        url: popMovieURL,
        success: function (data) {
            //allocating data
            popMovieData = data;
            console.log(data);
        }
    }).done(function () {
        for (var i = 1; i < 4; i++) {
            //trying to display the images
            var randomCar = Math.floor(Math.random() * 20);
            $("#carImg" + i).attr("src", "https://image.tmdb.org/t/p/original/" + popMovieData.results[randomCar].backdrop_path);
            $("#carTitle" + i).text(popMovieData.results[randomCar].original_title);
            $("#carRate" + i).text(popMovieData.results[randomCar].vote_average + " / 10");
        }
    });

    //Top Movies API
    var topMovieURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=8f58d34ff6d61c20b5d13e1290c1a937&primary_release_date.gte=2022-01-01&page=1"
    $.ajax({
        type: "GET",
        //getting the movie info
        url: topMovieURL,
        success: function (data) {
            //allocating data
            topMovieData = data;
            console.log(data);
        }
    }).done(function () {
        for (var i = 0; i < 4; i++) {
            //trying to display the images
            $("#topPoster" + i).attr("src", "https://image.tmdb.org/t/p/original/" + topMovieData.results[i].poster_path);
            $("#topTitle" + i).text(topMovieData.results[i].original_title);
            $("#topRate" + i).text(topMovieData.results[i].vote_average + " / 10");
        }
    });

});