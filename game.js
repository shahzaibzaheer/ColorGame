	var colorsButton = document.querySelector(".colorsButton");
	referesh();

	//  ********************************   Functions definition ******************************//


	function referesh() {

	  var box1 = document.querySelector("#box1");
	  var box2 = document.querySelector("#box2");
	  var box3 = document.querySelector("#box3");
	  var box4 = document.querySelector("#box4");
	  var box5 = document.querySelector("#box5");
	  var box6 = document.querySelector("#box6");
	  var header = document.querySelector("#header");
	  var result = document.querySelector("#result");
	  var colorDisplay = document.querySelector("#colorDisplay");


	  // box1.style.backgroundColor = "rgb(255, 0, 255)";  following line is similar to this line
	  box1.style.backgroundColor = randomColor();
	  box2.style.backgroundColor = randomColor();
	  box3.style.backgroundColor = randomColor();
	  box4.style.backgroundColor = randomColor();
	  box5.style.backgroundColor = randomColor();
	  box6.style.backgroundColor = randomColor();

	  colorDisplayChange();
	  colorsButton.textContent = "New Colors";
	  result.textContent = " ";
	  header.style.backgroundColor = "#4682b4";


	  box1.addEventListener("click", check);
	  box2.addEventListener("click", check);
	  box3.addEventListener("click", check);
	  box4.addEventListener("click", check);
	  box5.addEventListener("click", check);
	  box6.addEventListener("click", check);
	  colorsButton.addEventListener("click", referesh);





	}



	function randomColor() {
	  var i = randomNum();
	  var j = randomNum();
	  var k = randomNum();
	  var r = "rgb(" + i + ", " + j + ", " + k + ")";
	  return r;

	  function randomNum() {
	    var max = 255;
	    var num = Math.floor(Math.random() * (max + 1));
	    return num;
	  }
	}



	function colorDisplayChange() {


	  //store ALL RGB values in an arary
	  var colors = [
	    box1.style.backgroundColor,
	    box2.style.backgroundColor,
	    box3.style.backgroundColor,
	    box4.style.backgroundColor,
	    box5.style.backgroundColor,
	    box6.style.backgroundColor
	  ];

	  // now generate a random number and pick value according to that random number location from
	  // array and assign to colorDisplay

	  var min = 0; // equal to min=1
	  var max = 5; // max = 6
	  var n = Math.floor(Math.random() * (max + 1));
	  // now assign that value to color display

	  colorDisplay.textContent = colors[n];

	}

	function check() {

	  var square = document.querySelectorAll(".square");



	  if (this.style.backgroundColor == colorDisplay.textContent) {
	    // change the color of all boxs to the display color
	    for (var i = 0; i < 6; i++) {
	      square[i].style.backgroundColor = colorDisplay.textContent;
	    }

	    // change the header background color
	    header.style.background = colorDisplay.textContent;
	    result.textContent = "Correct!!";
	    colorsButton.textContent = "Play Again...???";

	  } else {
	    this.style.backgroundColor = "#232323";
	    result.textContent = "Try Again";
	  }
	}
