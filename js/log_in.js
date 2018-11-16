var login = [
    {
        user: "pizzacat",
        pw: "eatpizza"
        
    }
]
//names are subject to change
var settings = [
    {
        diet: "Keto",
        diet: "Paleo",
        diet: "Vegan",
        allergen: "Dairy",
        allergen: "Gluten",
        allergen: "Eggs",
        allergen: "Shell",
        allergen: "Nuts",
        allergen: "Soy"
    }
]


function validate() {
    var user = document.getElementById("user").value
    var pw = document.getElementById("pw").value

    for (i = 0; i < login.length; i ++){
        if (user == login[i].user && pw == login[i].pw) {
            window.location = "index.html";
            return true;
        }
        else {
            return false;
        }
    }
}

function login() {
         if (validate() == true) {
             sessionStorage.setItem("log_in", document.getElementById("user").value);
         }


}