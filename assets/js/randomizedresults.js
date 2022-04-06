

// store monster array
function storeInput1() {
    var Input1value = document.getElementById('inou').value;
    localStorage.setItem("key", value);
}

// Event listener  storing item 
btn9.addEventListener("click", storeInput1);


// page load event loads what's in local storage for each time-block
function init() {
    var newInput1 = localStorage.getItem("key");
    task9.append(newInput1);
   
}

//  Calls init function
init();