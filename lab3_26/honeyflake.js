// js template

function start(){
	//get the first number from the user.
	var input1 = prompt("enter the first number:");
	alert("the first number is: " + input1);
	//get the second number from the user.
	var input2 = prompt("enter the second number:");
	alert("the second number is: " + input2);
	//add the first and second numbers together.
	var output = parseInt(input1) + parseInt(input2);
	alert("the total is: " + output);
	//put first, second, and sum into the html.
	var box1 = document.getElementById("box1");
	box1.innerHTML = input1;
	
	var box2 = document.getElementById("box2");
	box2.innerHTML = input2;
	
	var box3 = document.getElementById("box3");
	box3.innerHTML = output;
}

function placeBallRandomly(){
	var ball = document.getElementById("ball");
	var w = window.innerWidth;
	var h = window.innerHeight;
	ball.style.display = "block";
	var x = Math.floor(Math.random() * w);
	var y = Math.floor(Math.random() * h);
	ball.style.left = x + "px";
	ball.style.top = y + "px";
	
	
}

function moveUp(){
	var ball= document.getElementById("ball");
	//get current position
	var y = parseInt(ball.style.top);
	// change value of y
	y -= 10;
	//set y
	ball.style.top =  y + "px";
}

function moveDown(){
	var ball= document.getElementById("ball");
	//get current position
	var y = parseInt(ball.style.top);
	// change value of y
	y += 10;
	//set y
	ball.style.top =  y + "px";
}

function moveLeft(){
	var ball= document.getElementById("ball");
	//get current position
	var x = parseInt(ball.style.left);
	// change value of x
	x -= 10;
	//set x
	ball.style.left =  x + "px";
}

function moveRight(){
	var ball= document.getElementById("ball");
	//get current position
	var x = parseInt(ball.style.left);
	// change value of x
	x += 10;
	//set x
	ball.style.left =  x + "px";
}