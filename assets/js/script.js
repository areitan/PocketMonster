//Initial HTML UI Elements//
var searchFormEl = document.querySelector("#search-form");
var searchButtonEl = document.getElementById("#search-button");
var recentListEl = document.querySelector("#search-recents");
var favoriteListEl = document.querySelector("#search-favorites");

//Attribute Selection//
var monsterSpecs = [];
var monsterArray = [];
var alignmentSelect = document.querySelector("#select-alignment");
var challengeSelect = document.querySelector("#select-cr");
var typeSelect = document.querySelector("#select-type");


//Search Open5e API//
    //search is centered around "type", need to create "if/else" for type === null
var sourceURL = "https://api.open5e.com/monsters/?type=" + monsterSpecs[2];

function getMonster() {

    fetch(sourceURL)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
    console.log(data)
    monsterArray = data
        })
    }

//Search Handler//
searchButtonEl.addEventListener("click", function(event) {
    event.preventDefault();

var monsterAlignment = alignmentSelect.value;
var monsterChallenge = challengeSelect.value;
var monsterType = typeSelect.value;

monsterSpecs.push(monsterAlignment);
monsterSpecs.push(monsterChallenge);
monsterSpecs.push(monsterType);

console.log(monsterSpecs);

    getMonster();
});

