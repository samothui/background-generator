var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.getElementById("gradient");
var colorLoad1 = color1.value;
var colorLoad2 = color2.value;
var colorButton = document.getElementById("random");

css.textContent = "linear-gradient(to right, " + colorLoad1 + ", " + colorLoad2+ ")";
gradient.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function changeGradient(){
	gradient.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = gradient.style.background + ";";
}

function generateRandomColor(){
	return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}

function changeGradientRandom(){
	let shade1 = generateRandomColor();
	let shade2 = generateRandomColor();
	gradient.style.background = "linear-gradient(to right, " + shade1 + ", " + shade2 + ")";
	css.textContent = gradient.style.background + ";";
	color1.setAttribute("value", shade1);
	color2.setAttribute("value", shade2);
}


random.addEventListener("click", changeGradientRandom);

color1.addEventListener("input", changeGradient);

color2.addEventListener("input", changeGradient);

