var login = [
    {
        user: "pizzacat",
        pw: "eatpizza"
    }

]
//names are subject to change
var settings1 = [
    {
        diet: "Keto",
        diet: "Paleo",
        diet: "Vegan"
    }
]
var settings2= [
    {
        allergen: "Dairy",
        allergen: "Gluten",
        allergen: "Eggs",
        allergen: "Shell",
        allergen: "Nuts",
        allergen: "Soy"
    }
]
var settings3 = [
    {
        favorites: "Chicken Alfredo",
        favorites: "Chickpea Curry",
        favorites: "Crack Chicken",
        favorites: "Honey Glazed Chicken Thighs",
        favorites: "Peanut Butter and Jelly Sandwhich",
        favorites: "Spinach Enchiladas"
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


$(document).ready(function() {
  var username = document.getElementById('user').value;
  var arr = [username];
  localStorage.setItem('user', JSON.stringify(arr));
  console.log(localStorage.getItem('user'));


/* YM stuff
function setDiet() {
    localStorage.setItem("myDiet", JSON.stringify(settings1));
    JSON.parse(localStorage.getItem("myDiet"));
},
function setAllergen(){
    localStorage.setItem("myAllergens", JSON.stringify(settings2));
    JSON.parse(localStorage.getItem("myAllergens"));
},
function setFavorites(){
    localStorage.setItem("myFavorites", JSON.stringify(settings3));
    JSON.parse(localStorage.getItem("myFavorites"));
},

function login() {
         if (validate() == true) {
             localStorage.setItem("log_in", document.getElementById("user").value);
         }
       }
       */
})
