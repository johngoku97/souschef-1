var simpleData = {'title': ''};




$(document).ready(function() {
  /*$('#start').onclick = function() {
    console.log("hello");
  }*/
  /* Retrieves previous items*/
  var arrItems = [];
  arrItems = JSON.parse(localStorage.getItem('user'));



  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#templatedProjects");

  // for loop to get all the names in the title

  simpleData = {'title': arrItems[0] + "'s " + "Profile"};



// start with a simple template
var html = template(simpleData);
console.log(html);
parentDiv.append(html);

});

function logout() {
  console.log("hello");
  localStorage.removeItem('listItems');
  localStorage.removeItem('checkedItems');
  localStorage.removeItem('user');
}
