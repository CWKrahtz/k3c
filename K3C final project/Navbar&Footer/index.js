$(document).ready(function (){

    //Remove movie //
    $("#xbtn1").click(function() {
        $("#movie1").hide();
    });
    $("#xbtn2").click(function() {
        $("#movie2").hide();
    });
    $("#xbtn3").click(function() {
        $("#movie3").hide();
    });
    $("#xbtn4").click(function() {
        $("#movie4").hide();
    });
    $("#xbtn5").click(function() {
        $("#movie5").hide();
    });
    //Remove movie//

    //Remove movie //
    $("#xbtn6").click(function() {
        $("#movie6").hide();
    });
    $("#xbtn7").click(function() {
        $("#movie7").hide();
    });
    $("#xbtn8").click(function() {
        $("#movie8").hide();
    });
    $("#xbtn9").click(function() {
        $("#movie9").hide();
    });
    $("#xbtn10").click(function() {
        $("#movie10").hide();
    });
    //Remove movie//



    //calling api to add to local storage
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
            var smovies = JSON.stringify(libData)
            localStorage.setItem("wmovies",smovies)
            //console.log(JSON.parse(localStorage.getItem("wmovies")));

            var movies = [ smovies ]
            //console.log(movies)          
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
            var smovies = JSON.stringify(libData)
        localStorage.setItem("wmovies",smovies)
        //console.log(JSON.parse(localStorage.getItem("wmovies")));

        var movies = [ smovies ]
        //console.log(movies)          
        }
    });
    //calling api to add to local storage
});



//Using a button to add get id from api 
function watchlist(){
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

            //local storage
            var smovies = JSON.stringify(libData)
            localStorage.setItem("wmovies",smovies)
            //console.log(JSON.parse(localStorage.getItem("wmovies")));

            var movies = [ smovies ]
            //local storage

            //button that adds id into session storage
            $("#stw1").click(function (){
                var mid = libData.results[i].original_title
                var currentid = JSON.stringify(mid)
                sessionStorage.setItem("savedmovie1", currentid)
                console.log(JSON.parse(sessionStorage.getItem("savedmovie1")));  
            
                // var sloggeduser = JSON.stringify(loggeduser);
                // users.push(newuser);
                // sessionStorage.setItem("loggedin",sloggeduser);
                // var saveduser = JSON.parse(sessionStorage.getItem("loggedin"));
            })
            $("#stw2").click(function (){
                var mid = libData.results[i].original_title
                var currentid = JSON.stringify(mid)
                sessionStorage.setItem("savedmovie2", currentid)
                console.log(JSON.parse(sessionStorage.getItem("savedmovie2")));  
            
                // var sloggeduser = JSON.stringify(loggeduser);
                // users.push(newuser);
                // sessionStorage.setItem("loggedin",sloggeduser);
                // var saveduser = JSON.parse(sessionStorage.getItem("loggedin"));
            })
            $("#stw3").click(function (){
                var mid = libData.results[i].original_title
                var currentid = JSON.stringify(mid)
                sessionStorage.setItem("savedmovie3", currentid)
                console.log(JSON.parse(sessionStorage.getItem("savedmovie3")));  
            
                // var sloggeduser = JSON.stringify(loggeduser);
                // users.push(newuser);
                // sessionStorage.setItem("loggedin",sloggeduser);
                // var saveduser = JSON.parse(sessionStorage.getItem("loggedin"));
            })
            $("#stw4").click(function (){
                var mid = libData.results[i].original_title
                var currentid = JSON.stringify(mid)
                sessionStorage.setItem("savedmovie4", currentid)
                console.log(JSON.parse(sessionStorage.getItem("savedmovie4")));  
            
                // var sloggeduser = JSON.stringify(loggeduser);
                // users.push(newuser);
                // sessionStorage.setItem("loggedin",sloggeduser);
                // var saveduser = JSON.parse(sessionStorage.getItem("loggedin"));
            })
            $("#stw5").click(function (){
                var mid = libData.results[i].original_title
                var currentid = JSON.stringify(mid)
                sessionStorage.setItem("savedmovie5", currentid)
                console.log(JSON.parse(sessionStorage.getItem("savedmovie5")));  
            
                // var sloggeduser = JSON.stringify(loggeduser);
                // users.push(newuser);
                // sessionStorage.setItem("loggedin",sloggeduser);
                // var saveduser = JSON.parse(sessionStorage.getItem("loggedin"));
            })
            //button that adds id into session storage
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

        //local storage  
        var smovies = JSON.stringify(libData)
        localStorage.setItem("wmovies",smovies)
        //console.log(JSON.parse(localStorage.getItem("wmovies")));

        var movies = [ smovies ]
        //local storage   
        
        ////button that adds id into session storage
        $("#stw1").click(function (){
            var mid = libData.results[i].original_title
            var currentid = JSON.stringify(mid)
            sessionStorage.setItem("savedmovie1", currentid)
            console.log(JSON.parse(sessionStorage.getItem("savedmovie1")));  
        
            // var sloggeduser = JSON.stringify(loggeduser);
            // users.push(newuser);
            // sessionStorage.setItem("loggedin",sloggeduser);
            // var saveduser = JSON.parse(sessionStorage.getItem("loggedin"));
        })
        $("#stw2").click(function (){
            var mid = libData.results[i].original_title
            var currentid = JSON.stringify(mid)
            sessionStorage.setItem("savedmovie2", currentid)
            console.log(JSON.parse(sessionStorage.getItem("savedmovie2")));  
        
            // var sloggeduser = JSON.stringify(loggeduser);
            // users.push(newuser);
            // sessionStorage.setItem("loggedin",sloggeduser);
            // var saveduser = JSON.parse(sessionStorage.getItem("loggedin"));
        })
        $("#stw3").click(function (){
            var mid = libData.results[i].original_title
            var currentid = JSON.stringify(mid)
            sessionStorage.setItem("savedmovie3", currentid)
            console.log(JSON.parse(sessionStorage.getItem("savedmovie3")));  
        
            // var sloggeduser = JSON.stringify(loggeduser);
            // users.push(newuser);
            // sessionStorage.setItem("loggedin",sloggeduser);
            // var saveduser = JSON.parse(sessionStorage.getItem("loggedin"));
        })
        $("#stw4").click(function (){
            var mid = libData.results[i].original_title
            var currentid = JSON.stringify(mid)
            sessionStorage.setItem("savedmovie4", currentid)
            console.log(JSON.parse(sessionStorage.getItem("savedmovie4")));  
        
            // var sloggeduser = JSON.stringify(loggeduser);
            // users.push(newuser);
            // sessionStorage.setItem("loggedin",sloggeduser);
            // var saveduser = JSON.parse(sessionStorage.getItem("loggedin"));
        })
        $("#stw5").click(function (){
            var mid = libData.results[i].original_title
            var currentid = JSON.stringify(mid)
            sessionStorage.setItem("savedmovie5", currentid)
            console.log(JSON.parse(sessionStorage.getItem("savedmovie5")));  
        
            // var sloggeduser = JSON.stringify(loggeduser);
            // users.push(newuser);
            // sessionStorage.setItem("loggedin",sloggeduser);
            // var saveduser = JSON.parse(sessionStorage.getItem("loggedin"));
        })
        //button that adds id into session storage

        }
    });


}
//Using a button to get an id from api 



//displaying info in session storage to watchlist
$(document).ready(function (){
    //each movie in watchlist
    var savedid = JSON.parse(sessionStorage.getItem("savedmovie1"))

    var wm = JSON.parse(localStorage.getItem(savedid))
    console.log( wm )

    var movie = null
    let call = "https://api.themoviedb.org/3/search/movie?api_key=d7c5c7eca687ff8ab7a714827d938782&query="+ savedid;

    $.ajax({
        type: "GET",
        url: call,
        success: function (data) {
            movie = data;
            console.log(data);
        }
    }).done(function () {
        $("#poster").attr("src", "https://image.tmdb.org/t/p/original/" + movie.results[0].poster_path);
        $("#title").text(movie.results[0].title)
        $("#info").text(movie.results[0].release_date);
    })

    var savedid2 = JSON.parse(sessionStorage.getItem("savedmovie2"))

    var wm = JSON.parse(localStorage.getItem(savedid2))
    console.log( wm )

    var movie2 = null
    let call2 = "https://api.themoviedb.org/3/search/movie?api_key=d7c5c7eca687ff8ab7a714827d938782&query="+ savedid2;

    $.ajax({
        type: "GET",
        url: call2,
        success: function (data) {
            movie2 = data;
            console.log(data);
        }
    }).done(function () {
        $("#poster2").attr("src", "https://image.tmdb.org/t/p/original/" + movie2.results[0].poster_path);
        $("#title2").text(movie2.results[0].title)
        $("#info2").text(movie2.results[0].release_date);
    })

    var savedid3 = JSON.parse(sessionStorage.getItem("savedmovie3"))

    var wm = JSON.parse(localStorage.getItem(savedid3))
    console.log( wm )

    var movie3 = null
    let call3 = "https://api.themoviedb.org/3/search/movie?api_key=d7c5c7eca687ff8ab7a714827d938782&query="+ savedid3;

    $.ajax({
        type: "GET",
        url: call3,
        success: function (data) {
            movie3 = data;
            console.log(data);
        }
    }).done(function () {
        $("#poster3").attr("src", "https://image.tmdb.org/t/p/original/" + movie3.results[0].poster_path);
        $("#title3").text(movie3.results[0].title)
        $("#info3").text(movie3.results[0].release_date);
    })

    var savedid4 = JSON.parse(sessionStorage.getItem("savedmovie4"))

    var wm = JSON.parse(localStorage.getItem(savedid4))
    console.log( wm )

    var movie4 = null
    let call4 = "https://api.themoviedb.org/3/search/movie?api_key=d7c5c7eca687ff8ab7a714827d938782&query="+ savedid4;

    $.ajax({
        type: "GET",
        url: call4,
        success: function (data) {
            movie4 = data;
            console.log(data);
        }
    }).done(function () {
        $("#poster4").attr("src", "https://image.tmdb.org/t/p/original/" + movie4.results[0].poster_path);
        $("#title4").text(movie4.results[0].title)
        $("#info4").text(movie4.results[0].release_date);
    })

    var savedid5 = JSON.parse(sessionStorage.getItem("savedmovie5"))

    var wm = JSON.parse(localStorage.getItem(savedid5))
    console.log( wm )

    var movie5 = null
    let call5 = "https://api.themoviedb.org/3/search/movie?api_key=d7c5c7eca687ff8ab7a714827d938782&query="+ savedid5;

    $.ajax({
        type: "GET",
        url: call5,
        success: function (data) {
            movie5 = data;
            console.log(data);
        }
    }).done(function () {
        $("#poster5").attr("src", "https://image.tmdb.org/t/p/original/" + movie5.results[0].poster_path);
        $("#title5").text(movie5.results[0].title)
        $("#info5").text(movie5.results[0].release_date);
    })
    //each movie in watchlist
})
//displaying info in session storage to watchlist



