//Access Local Storage & Fill Values From Storage//
var lastMonster = JSON.parse(localStorage.getItem("monster"));
console.log(lastMonster);

//AC
document.getElementsByClassName("armorClass")[0].innerHTML = lastMonster.armor_class;

//HP//
document.getElementsByClassName("hitPoints")[0].innerHTML = lastMonster.hit_points;

//Speed//
var speed = lastMonster.speed
var speedDisplay = document.getElementsByClassName("speed")[0];
console.log(speed)
for (var key in speed) {
  var keyEl = document.createElement("p");
  keyEl.innerHTML = `${key}: ${speed[key]}`;
  console.log(keyEl);
  speedDisplay.appendChild(keyEl);
}