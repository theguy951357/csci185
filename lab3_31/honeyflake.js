// js template

//global variables
var velocity_x = 10;
var velocity_y = 7;

function moveBall(){
	//debug just to make sure this shit started.
	//alert("this shit started.")
	
	setTimeout(function(){
		startBallMove();
	}, 3000);
}

function startBallMove(){
	//debugging to make sure the function got called.
	//alert("called startMoveBall");
	//get element.
	var ball = document.getElementById("ball");
	//get x and y coordinates of ball.
	var x = parseInt(ball.style.left);
	var y = parseInt(ball.style.top);
	
	//check if xy is NaN, if so, make it zero.
	if(isNaN(x)){
		x=0;
	}
	if(isNaN(y)){
		y=0;
	}
	
	//ask if we've hit a wall
	if(x + 100 > window.innerWidth){
		velocity_x *= -1;
	}
	if(x < 0){
		velocity_x *= -1;
	}
	if( y + 100 > window.innerHeight){
		velocity_y *= -1;
	}
	if(y < 0){
		velocity_y *= -1;
	}
	
	
	
	//change x by 10 and y by 7
	x += velocity_x;
	y += velocity_y;
	
	//write x and y into the body of the ball.
	ball.innerHTML = "<span> x = " + x + "<br>" + "y = " + y + "</span>";
	
	// change the position of the ball
	ball.style.left = x + "px";
	ball.style.top = y + "px";
	
	// call startBallMove in one second
	setTimeout(function(){
		startBallMove();
	}, 100);
	
}