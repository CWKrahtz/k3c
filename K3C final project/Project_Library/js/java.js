
window.onload = function () {

    var libData = null;
    var randomMovie = Math.floor(Math.random() * 500);
    var libURL = "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&sort_by=revenue.desc&page=" + randomMovie;

    $.ajax({
        type: "GET",
        url: libURL,
        success: function (data) {
            libData = data;
            console.log(data);
        }
    }).done(function () {
        for (var i = 1; i < 20; i++) {
            $("#libPoster" + i).attr("src", "https://image.tmdb.org/t/p/original/" + libData.results[i].poster_path);
            $("#libTitle" + i).text(libData.results[i].title)
            $("#libInfo" + i).text(libData.results[i].release_date);
        }
    });

    randomMovie = Math.floor(Math.random() * 500);
    libURL = "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&sort_by=revenue.desc&page=" + randomMovie;

    $.ajax({
        type: "GET",
        url: libURL,
        success: function (data) {
            libData = data;
            console.log(data);
        }
    }).done(function () {
        for (var i = 0; i < 6; i++) {
            $("#libPoster2" + i).attr("src", "https://image.tmdb.org/t/p/original/" + libData.results[i].poster_path);
            $("#libTitle2" + i).text(libData.results[i].title)
            $("#libInfo2" + i).text(libData.results[i].release_date);
        }
    });
}



function displayFilter() {
    var x = document.getElementById("movieFilter").value;
    //All Movies
    if (x == 0) {
        var libData = null;
        var randomLibMovie = Math.floor(Math.random() * 500);
        var libURL = "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&sort_by=revenue.desc&page=" + randomLibMovie;

        $.ajax({
            type: "GET",
            url: libURL,
            success: function (data) {
                libData = data;
                console.log(data);
            }
        }).done(function () {
            for (var i = 1; i < 20; i++) {
                $("#libPoster" + i).attr("src", "https://image.tmdb.org/t/p/original/" + libData.results[i].poster_path);
                $("#libTitle" + i).text(libData.results[i].title)
                $("#libInfo" + i).text(libData.results[i].release_date);
            }
        });

        randomLibMovie = Math.floor(Math.random() * 500);
        var libURL2 = "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&sort_by=revenue.desc&page=" + randomLibMovie;

        $.ajax({
            type: "GET",
            url: libURL2,
            success: function (data) {
                libData = data;
                console.log(data);
            }
        }).done(function () {
            for (var i = 0; i < 6; i++) {
                $("#libPoster2" + i).attr("src", "https://image.tmdb.org/t/p/original/" + libData.results[i].poster_path);
                $("#libTitle2" + i).text(libData.results[i].title)
                $("#libInfo2" + i).text(libData.results[i].release_date);
            }
        });
    }




//Genre
    if (x == 1) {
        var genreURL = "https://api.themoviedb.org/3/discover/movie/?api_key=8f58d34ff6d61c20b5d13e1290c1a937&genre_ids=28&page=1"
        $.ajax({
            type: "GET",
            //getting the movie info
            url: genreURL,
            success: function (data) {
                //allocating data
                libData = data;
                console.log(data);
            }
        }).done(function () {
            for (var i = 1; i < 20; i++) {
                $("#libPoster" + i).attr("src", "https://image.tmdb.org/t/p/original/" + libData.results[i].poster_path);
                $("#libTitle" + i).text(libData.results[i].title);
                $("#libInfo" + i).text(libData.results[i].vote_average);
            }
        });

        var genreURL2 = "https://api.themoviedb.org/3/discover/movie/?api_key=8f58d34ff6d61c20b5d13e1290c1a937&genre_ids=28&page=2"
        $.ajax({
            type: "GET",
            //getting the movie info
            url: genreURL2,
            success: function (data) {
                //allocating data
                libData = data;
                console.log(data);
            }
        }).done(function () {
            for (var i = 0; i < 6; i++) {
                $("#libPoster2" + i).attr("src", "https://image.tmdb.org/t/p/original/" + libData.results[i].poster_path);
                $("#libTitle2" + i).text(libData.results[i].title);
                $("#libInfo2" + i).text(libData.results[i].vote_average);
            }
        });
    }




//Year
    if (x == 2) {
        var yearURL = "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&primary_release_date.gte=2022-01-01&page=1"
        $.ajax({
            type: "GET",
            //getting the movie info
            url: yearURL,
            success: function (data) {
                //allocating data
                libData = data;
                console.log(data);
            }
        }).done(function () {
            for (var i = 1; i < 20; i++) {
                $("#libPoster" + i).attr("src", "https://image.tmdb.org/t/p/original/" + libData.results[i].poster_path);
                $("#libTitle" + i).text(libData.results[i].title);
                $("#libInfo" + i).text(libData.results[i].release_date);
            }
        });

        var yearURL2 = "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&primary_release_date.gte=2022-01-01&page=2"
        $.ajax({
            type: "GET",
            //getting the movie info
            url: yearURL2,
            success: function (data) {
                //allocating data
                libData = data;
                console.log(data);
            }
        }).done(function () {
            for (var i =0; i < 6; i++) {
                $("#libPoster2" + i).attr("src", "https://image.tmdb.org/t/p/original/" + libData.results[i].poster_path);
                $("#libTitle2" + i).text(libData.results[i].title);
                $("#libInfo2" + i).text(libData.results[i].release_date);
            }
        });
    }




    //IMDB Rating
    if (x == 3) {
        var yearURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=8f58d34ff6d61c20b5d13e1290c1a937&primary_release_date.gte=2022-01-01&page=1"
        $.ajax({
            type: "GET",
            //getting the movie info
            url: yearURL,
            success: function (data) {
                //allocating data
                libData = data;
                console.log(data);
            }
        }).done(function () {
            for (var i = 1; i < 20; i++) {
                $("#libPoster" + i).attr("src", "https://image.tmdb.org/t/p/original/" + libData.results[i].poster_path);
                $("#libTitle" + i).text(libData.results[i].title);
                $("#libInfo" + i).text(libData.results[i].vote_average + "/ 10");
            }
        });

        var yearURL2 = "https://api.themoviedb.org/3/movie/top_rated?api_key=8f58d34ff6d61c20b5d13e1290c1a937&primary_release_date.gte=2022-01-01&page=2"
        $.ajax({
            type: "GET",
            //getting the movie info
            url: yearURL2,
            success: function (data) {
                //allocating data
                libData = data;
                console.log(data);
            }
        }).done(function () {
            for (var i = 0; i < 6; i++) {
                $("#libPoster2" + i).attr("src", "https://image.tmdb.org/t/p/original/" + libData.results[i].poster_path);
                $("#libTitle2" + i).text(libData.results[i].title);
                $("#libInfo2" + i).text(libData.results[i].vote_average + "/ 10");
            }
        });
    }
}