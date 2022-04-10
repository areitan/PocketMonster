//Initial HTML UI Elements//
var searchFormEl = document.querySelector("#search-form");
var searchButtonEl = document.getElementById("#search-button");
var recentListEl = document.querySelector("#search-recents");
var favoriteListEl = document.querySelector("#search-favorites");

//Attribute Selection//
var alignmentSelect = document.querySelector("#select-alignment");
var challengeSelect = document.querySelector("#select-cr");
var sizeSelect = document.querySelector("#select-size");
var typeSelect = document.querySelector("#select-type");

//Empty Arrays For Functions//
var monsterArray = [];
var monsterParameters = [];
var monsterResult = [];
var monsterSpecs = { 
    slug: "aboleth", // Placeholder, should be empty
    alignment: "",
    challenge_rating: "",
    size: "",
    type: "",
    }

//Open5e API Source URL//
var sourceURL = "https://api.open5e.com/monsters/?type=" + monsterSpecs.type;

//Fetch & Search Open5e API//
function getMonster() {
    //Conditional URL Generation To Allow Empty Parameters//
    if (monsterSpecs.type == "" && monsterSpecs.challenge_rating !== "") {
        sourceURL = "https://api.open5e.com/monsters/?challenge_rating=" + monsterSpecs.challenge_rating;
        console.log("Sort by challenge_rating", sourceURL);
    }
    else if (monsterSpecs.type == "" && monsterSpecs.challenge_rating == "" && monsterSpecs.alignment !== "") {
        sourceURL = "https://api.open5e.com/monsters/?alignment=" + monsterSpecs.alignment.replace(" ", "_");
        console.log("Sort by alignment", sourceURL);
    }
    else if (monsterSpecs.type == "" && monsterSpecs.challenge_rating == "" && monsterSpecs.alignment == "" && monsterSpecs.size !== "") {
        sourceURL = "https://api.open5e.com/monsters/?size=" + monsterSpecs.size;
        console.log("Sort by size", sourceURL);
    }
    else {
        console.log("Sort by type", sourceURL);
    }
    
    //Fetch API//
    fetch(sourceURL)
    .then(function (response) {
        return response.json();
        })

    //Store Monster Array//
    .then(function (data) {
    monsterArray = data.results
    console.log("monsterArray", monsterArray)
    })

    //Pick Random Monster//
    .then(function (randomMonster) {
        var randomMonster = monsterArray[Math.floor(Math.random()*monsterArray.length)];
        console.log("randomMonster", randomMonster.slug, randomMonster);
        monsterResult = randomMonster
        })

    //Save & Print Local Storage//
    .then(saveLastMonster)
    .then(saveLastSearch)
    .then(printLastSearch)
    .then(document.location = "./randomizedresults.html")
}

//Local Storage Functions//
function saveLastMonster() {
    localStorage.setItem("monster", JSON.stringify(monsterResult));
    }

function saveLastSearch() {
    var search = {
        alignment: alignmentSelect.value,
        challenge_rating: challengeSelect.value,
        size: sizeSelect.value,
        type: typeSelect.value
        };
    localStorage.setItem("search", JSON.stringify(search));
    }

function printLastSearch() {
    var lastSearch = JSON.parse(localStorage.getItem("search"));
    if (lastSearch !== null) {
        document.getElementById("savedRating").innerHTML = lastSearch.challenge_rating;
        document.getElementById("savedType").innerHTML = lastSearch.type;
        document.getElementById("savedSize").innerHTML = lastSearch.size;
        document.getElementById("savedAlignment").innerHTML = lastSearch.alignment;
    } else {
      return;
    }}

//Search Button Handler//
document.addEventListener("click", clickHandler);
function clickHandler(event) {
    event.preventDefault();
    targetEl = event.target;
    if (targetEl.matches("button")) {

    //Pass Values Into Variables//
var monsterAlignment = alignmentSelect.value;
var monsterChallenge = challengeSelect.value;
var monsterSize = sizeSelect.value;
var monsterType = typeSelect.value;
    
    //Pass Variables Into Array//
    monsterSpecs.alignment = monsterAlignment
    monsterSpecs.challenge_rating = monsterChallenge
    monsterSpecs.size = monsterSize
    monsterSpecs.type = monsterType

    //Run Search//
    getMonster();
    console.log("monsterSpecs", monsterSpecs);
        }
    };

//Page Load// 
function init() {
    printLastSearch();
  }
  
  init();