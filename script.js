//Javascript
var css = document.querySelector("h3");
var color1 =document.querySelector(".color1");
var color2 =document.querySelector(".color2");
var body = document.getElementById("gradient");
//var randoButton = document.getElementById("RandomColor");
var randoButton = document.querySelector(".RandomColor");
body.style.background=
"linear-gradient(to right, "
+ color1.value
+ ", "
+ color2.value
+ ")";

css.textContent = body.style.background + ";"


function setGradient() {
  body.style.background=
  "linear-gradient(to right, "
  + color1.value
  + ", "
  + color2.value
  + ")";

  css.textContent = body.style.background + ";";
}

function randofunction(){
  console.log("Inside Rando");
  body.style.background=
  "linear-gradient(to right, orange, blue)";
    css.textContent = body.style.background + ";";
}

console.log(body);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
document.addEventListener('DOMContentLoaded', function(){
randoButton.addEventListener('click',randofunction);
});
