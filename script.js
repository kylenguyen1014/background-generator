var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColour = document.getElementsByClassName("color")[0];
var randomAngel = document.querySelector(".angel");
var angel = 0;

// set gradient background
function setGradient() {
	body.style.background = 
	"linear-gradient("
	+ angel + "deg, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// randomlize color inputs
function randomColor() {
	var color = "#";
	var hexValues = "0123456789abcdef";
	for (var i = 0; i < 6; i++){
		color += hexValues[Math.floor(Math.random() * 16)];
	}
	return color;
}

// randomlize an angel 
function pickAngel() {
	angel = Math.floor(Math.random() * 360);
	setGradient();
}

// change color inputs and set gradient background
function changeColorInput() {
	 color1.value = randomColor();
	 color2.value = randomColor();
	 setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomColour.addEventListener("click", changeColorInput);

randomAngel.addEventListener("click", pickAngel);