var users = [
    {
        username: "CS",
        password: "Cc0825417121"
    },
    {
        username: "Kobus",
        password: "Kk0825417121"
    },
    {
        username: "Tyrone",
        password: "Tt0825417121"
    },
    {
        username: "Christian",
        password: "Cc0825417121"
    },
    {
        username: "Conor",
        password: "Cc0825417121"
    }
]


function login() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var usercheck = false

    for (let i = 0; i < users.length; i++) {
        if (name == users[i].username) {
            if (password == users[i].password) {

                usercheck = true;

            }
        }

    }

    if (usercheck) {
        alert("welcome... " + name)
        var loggeduser = {
            username : name,
            password : password
        }
        var sloggeduser = JSON.stringify(loggeduser)

        //users.push(newuser)
        sessionStorage.setItem("logged in" + loggeduser)
        var saveduser = JSON.parse(sessionStorage.getItem("sloggeduser"))
    } else {
        alert("incorrect username or password")
    }
}

function signup() {

    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    var userCheck = true;

    for (let i = 0; i < users.length; i++) {
        if (name == users[i].username) {
            userCheck = false
        }
    }


    //To see if the user si correct and to display the coorect name throughthe use of session storage on the other pages
    if (userCheck){
        alert("Welcome: " + name);
        var newuser = {
            username : name,
            password : password
        }

        users.push(newuser)
        console.log(users)
    }else {
        alert("Username already excist");
    }

}