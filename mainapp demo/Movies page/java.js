
var movieName = [
    "End+Of+The+Road",
    "Samaritan",
    "Me+Time",
    "Carter",
    "X",
    "Luck",
    "Massive+Talent",
    "Two",
    "Top+Gun+Maverick",
    "Day+Shift",
    "Dog",
    "Memory",
    "Thirteen+Lives",
    "Deep+Water",
    "The+Gray+Man",
    "Purple+Hearts",
    "Interceptor",
    "Father+Of+The+Bride",
    "Spiderhead",
    "Minions+The+Rise+Of+Gru",
    "365+Days",
    "The+In+Between",
    "Superpets",
    "Infinite",
    "Mrbius"
]

$(document).ready(function () {
/*
    var movieData = null;
    var movie = null;
    var name = '';

    for (var i = 0; i < 15; i++) {
        console.log(movieName[i]);

        //Movie name from array
        name = movieName[i];
        $.ajax({
            type: "GET",
            //getting the movie info
            url: "https://api.themoviedb.org/3/search/movie?api_key=d7c5c7eca687ff8ab7a714827d938782&query=" + name,
            success: function (data) {
                //allocating data
                movieData = data;
                //console.log(movieData.results[0].poster_path);
                //url to display images
                movie = "https://image.tmdb.org/t/p/original" + movieData.results[0].poster_path;
            }
        }).done(function () {
            //displaying the image url
            console.log(movie);
            //trying to display the images
            $("#moviePoster" + i).attr("src", movie);
        });
    }
*/



});