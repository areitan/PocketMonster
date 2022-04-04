    //Initial HTML UI Elements//
var searchFormEl = document.querySelector("#search-form");
var submitBtnEl = document.querySelector("#search-btn");
var recentListEl = document.querySelector("#search-recents");
var favoriteListEl = document.querySelector("#search-favorites");

    //Attribute Selection//

var alignmentSelect= document.querySelector("#select-alignment");
var challengeSelect= document.querySelector("#select-cr");
var typeSelect= document.querySelector("#select-type");

    //Event Listener//

submitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();

});
