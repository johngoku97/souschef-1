// This serves as a fake database:
//var simpleData = {'title': 'test'};
var simpleData = {'title': ''};



$(document).ready(function() {
  /* Retrieves previous items*/
  var arrItems = [];
  arrItems = JSON.parse(localStorage.getItem('checkedItems'));



  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#templatedProjects");

  // for loop to get all the names in the title
  var prev = '';
  if (arrItems.length > 0) {
  for (var i = 0; i < arrItems.length; i++) {
    simpleData = {'title': prev + arrItems[i]};
    prev = simpleData.title + ' ';
  }
}

else {
  alert("No ingredients selected");
  location.href = "ingredients.html";
}


  // start with a simple template
  var html = template(simpleData);
  console.log(html);
  parentDiv.append(html);



/*
  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < complexData.length; i++) {
    var curData = complexData[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }


  // END - STEP 1


  // BEGIN - STEP 2


  // when you first load the page, set a custom name if you have one:
  var name = localStorage.getItem('customName');
  if (name) {
    $("#myName").html(name);
  }

  // use localStorage to store your name
  $("#changeName").click(function() {
    var newName = prompt("What's your new name?");
    if (newName) {
      $("#myName").html(newName);
      localStorage.setItem('customName', newName);
    }
  });


  // END - STEP 2


  // BEGIN - STEP 3


  // Use the URLSearchParams API to make fake-database queries using a URL
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  var queryParams = new URLSearchParams(window.location.search);
  var projectTitle = queryParams.get('project');
  console.log('query for', projectTitle);

  // to get this to work like in class, comment out the "STEP 1" parts
  // above between BEGIN and END.
  for (var i = 0; i < complexData.length; i++) {
    var curData = complexData[i];
    if (curData.title == projectTitle) {
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }
  }

*/
  // END - STEP 3
});
