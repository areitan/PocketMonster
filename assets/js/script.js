// Search Button variable
var searchButton = document.getElementById('searchButton');
var slug = monsterSpecs.slug;

// goqr API https://open5e.com/monsters/monster-list
var qrURL = "https://api.qrserver.com/v1/create-qr-code/?data=" + slug + "&size=300x300&format=.svg";
var qrGen = document.getElementById("qr");
// Changes src in empty <img> tag
qrGen.src = qrURL;
