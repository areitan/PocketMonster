//Access Local Storage & Fill Values From Storage//
var lastMonster = JSON.parse(localStorage.getItem("monster"));
    console.log(lastMonster);

// goqr API https://open5e.com/monsters/monster-list
var qrURL = "https://api.qrserver.com/v1/create-qr-code/?data=https://open5e.com/monsters/" + lastMonster.slug + "&size=300x300&format=.svg";
var qrGen = document.getElementById("qr");

function generateQR() {
    document.getElementById("qr");
};

// Changes src in empty <img> tag
qrGen.src = qrURL;

//Name//
document.getElementsByClassName("name")[0].innerHTML = lastMonster.name;

//Armor Class//
document.getElementsByClassName("armorClass")[0].innerHTML = lastMonster.armor_class;

//Hit Points//
document.getElementsByClassName("hitPoints")[0].innerHTML = lastMonster.hit_points;

//Speed//
var speed = lastMonster.speed
var speedDisplay = document.getElementsByClassName("speed")[0];
    for (var key in speed) {
    var keyEl = document.createElement("p");
        keyEl.innerHTML = `${key}: ${speed[key]}`;
        speedDisplay.appendChild(keyEl);
        }

//Hit Dice//
document.getElementsByClassName("hitDice")[0].innerHTML = lastMonster.hit_dice;

//Challenge Rating//
document.getElementsByClassName("challengeRating")[0].innerHTML = lastMonster.challenge_rating;

//Type//
document.getElementsByClassName("type")[0].innerHTML = lastMonster.type;

//Size//
document.getElementsByClassName("size")[0].innerHTML = lastMonster.size;

//Alignment//
document.getElementsByClassName("alignment")[0].innerHTML = lastMonster.alignment;

//Strength//
document.getElementsByClassName("strength")[0].innerHTML = lastMonster.strength;

//Dexterity//
document.getElementsByClassName("dexterity")[0].innerHTML = lastMonster.dexterity;

//Constitution//
document.getElementsByClassName("constitution")[0].innerHTML = lastMonster.constitution;

//Charisma//
document.getElementsByClassName("charisma")[0].innerHTML = lastMonster.charisma;

//Intelligence//
document.getElementsByClassName("intelligence")[0].innerHTML = lastMonster.intelligence;

//Wisdom//
document.getElementsByClassName("wisdom")[0].innerHTML = lastMonster.wisdom;

//Print Search History//
var historyLink = "https://open5e.com/monsters/" + lastMonster.slug;
document.getElementsByClassName("monsterHistory")[0].innerHTML = historyLink;

//Open Statblock Link In New Window//
document.addEventListener("click", clickHandler);

function clickHandler(event) {
    event.preventDefault();
    targetEl = event.target;
    if (targetEl.matches("ul")) {
        window.open(historyLink, "_blank")
    }}

    // goqr API https://open5e.com/monsters/monster-list
var qrURL = "https://api.qrserver.com/v1/create-qr-code/?data=https://open5e.com/monsters/" + lastMonster.slug + "&size=300x300&format=.svg";
var qrGen = document.getElementById("qr");

function generateQR() {
    document.getElementById("qr");
};

// Changes src in empty <img> tag
qrGen.src = qrURL;
