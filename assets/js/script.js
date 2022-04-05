//Initial HTML UI Elements//
var searchFormEl = document.querySelector("#search-form");
var submitBtnEl = document.querySelector("#search-btn");
var recentListEl = document.querySelector("#search-recents");
var favoriteListEl = document.querySelector("#search-favorites");

//Attribute Selection//
var monsterSpecs = [];
var monsterArray = [];
var alignmentSelect = document.querySelector("#select-alignment");
var challengeSelect = document.querySelector("#select-cr");
var typeSelect = document.querySelector("#select-type");



//Search Open5e API//
var sourceURL = "https://api.open5e.com/monsters/?type=" + monsterSpecs[2];

function getMonster(monsterSpecs) {

    fetch(sourceURL)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
    console.log(data)
    console.log(monsterSpecs + " getMonster check")
        })}

//Search Handler//
submitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();

var monsterAlignment = alignmentSelect.value;
var monsterChallenge = challengeSelect.value;
var monsterType = typeSelect.value;

monsterSpecs.push(monsterAlignment);
monsterSpecs.push(monsterChallenge);
monsterSpecs.push(monsterType);

console.log(monsterSpecs);

    getMonster(monsterSpecs);
});

