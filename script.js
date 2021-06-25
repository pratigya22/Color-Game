var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners
	setupModeButtons();	
	//square listeners
	setupSquareListeners();
	//resetF function which does a lot of things
	resetF();
}

reset.addEventListener("click", function(){
	resetF();
})

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			resetF();
		})
	}
}
function setupSquareListeners(){
	for(i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				reset.textContent = "Play Again?";
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}
function resetF(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	reset.textContent = "New colors"
	for(i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
		    squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue"; 
}
function changeColors (color){
	for(i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor((Math.random() * colors.length));
	return colors[random];
}
function generateRandomColors(num){
	var arr =[];
	for(i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}