// store monster array
var rating = document.getElementById("rating");
var type = document.getElementById("type");
var size = document.getElementById("size");
var alignment = document.getElementById("alignment");
var searchButton = document.getElementById("searchButton");

// Add in last monster URL to saved object

function saveLastMonster() {
  // Save search form data as an object
  var monster = {
    rating: rating.value,
    type: type.value,
    size: type.value,
    alignment: type.value
  };
  // Store object in local storage and convert to string
  localStorage.setItem("monster", JSON.stringify(monster));
}

function LastMonster() {
  // Use JSON.parse() to create object
  var lastMonster = JSON.parse(localStorage.getItem("monster"));
  
  if (lastMonster !== null) {
  document.getElementById("savedRating").innerHTML = lastMonster.rating;
  document.getElementById("savedType").innerHTML = lastMonster.type;
  document.getElementById("savedSize").innerHTML = lastMonster.size;
  document.getElementById("savedAlignment").innerHTML = lastMonster.alignment;
  } else {
    return;
  }
}

saveButton.addEventListener("click", function(event) {
event.preventDefault();
saveLastMonster();
LastMonster();
});

// The init() function on page load 
function init() {
  LastMonster();
}
init();

//  Calls init
init();