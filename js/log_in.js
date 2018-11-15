var login = [
    {
        user: "pizzacat",
        pw: "eatpizza"
    }
]

function validate() {
    var user = document.getElementById("user").value
    var pw = document.getElementById("pw").value

    for (i = 0; i < login.length; i ++){
        if (user == login[i].user && pw == login[i].pw) {
            window.location = "index.html";
        }
    }
}