var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var body = document.getElementById("gradient");

color1.addEventListener("input", function(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value 
    + ", "
    + color3.value 
    + ", " 
    + color4.value 
    +")";
    css.textContent = body.style.background + ";";
})

color2.addEventListener("input",function(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value 
    + ", "
    + color3.value 
    + ", " 
    + color4.value 
    +")";
    css.textContent = body.style.background + ";";

})

color3.addEventListener("input",function(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value 
    + ", "
    + color3.value 
    + ", " 
    + color4.value 
    +")";
    css.textContent = body.style.background + ";";

})

color4.addEventListener("input",function(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value 
    + ", "
    + color3.value 
    + ", " 
    + color4.value 
    +")";
    css.textContent = body.style.background + ";";

})

