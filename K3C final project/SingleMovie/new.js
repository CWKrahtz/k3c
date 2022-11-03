window.onload = function () {

    SMpage = null
    let spcall = "https://api.themoviedb.org/3/movie/454626?api_key=8f58d34ff6d61c20b5d13e1290c1a937";
    $.ajax({
        type: "GET",
        url: spcall,
        success: function (data) {
            spmovie = data
        }
    }).done(function () {
        $("#libPoster11").text(spmovie.overview)
        $("#libTitle11").text(spmovie.original_title)
        $("#libInfo11").text(spmovie.release_date + " • " + spmovie.runtime + " min" + " • " + spmovie.original_language)
        $("#white_box").attr("src", "https://image.tmdb.org/t/p/original/" + spmovie.backdrop_path);
        $("#libRating1").text("Viewer rating: " + Math.round(spmovie.vote_average))
        for (let i = 0; i < 4; i++) {
            $("#smgenre1").text("Genre: " + spmovie.genres[0].name)

        }
    });


}