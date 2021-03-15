// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseleave", function() {
//     console.log("OHH SHIT. THIS NIGGA CLICKED ME");
// })

var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
   if(input.value.length > 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})

input.addEventListener("keypress", function(e) {
    if(input.value.length > 0 && e.keyCode === 13){
         var li = document.createElement("li");
         li.appendChild(document.createTextNode(input.value));
         ul.appendChild(li);
         input.value = "";
     }
 })