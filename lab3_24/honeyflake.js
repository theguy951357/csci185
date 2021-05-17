// js template



function changeBoxToWhite(){
	//show the popup box to prove you are getting to this function.
	//alert("the javscript function changeBoxToWhite() was called.");
	
	//get the html element from the document.
	var my_div = document.getElementById("div1");
	//change the background color using var my_div as a handle.
	my_div.style.backgroundColor = "white";
	
}
 function changeBoxBack(){
	 var my_div = document.getElementById("div1");
	 my_div.style.backgroundColor = "#3af012";
 }
 
 function hideBox(){
	 var my_div = document.getElementById("div1");
	 my_div.style.display = "none";
 }
 function showBox(){
	 var my_div = document.getElementById("div1");
	 my_div.style.display = "block";
 }
 
 function moveLeft(){
	 //gets element
	 var my_div = document.getElementById("div1");
	 //gets the value of the hidden input boxes in html
	 var input = document.getElementById("leftInput");
	 //increments down by 5
	 input.value -= 5;
	 //sets the left style to the new input.
	 my_div.style.left = input.value+"px";
 }
 
 function moveRight(){
	 var my_div = document.getElementById("div1");
	 var input = document.getElementById("leftInput");
	 //fixed the += issue with -= -5. glitch shown in moveDown().
	 input.value -= -5;
	 my_div.style.left = input.value+"px";
 }
 
 function moveUp(){
	 var my_div = document.getElementById("div1");
	 var input = document.getElementById("topInput");
	 input.value -= 5;
	 my_div.style.top = input.value+"px";
 }
 
 function moveDown(){
	 var my_div = document.getElementById("div1");
	 var input = document.getElementById("topInput");
	 //+= sends the div straight to hell. it changes 200 to 2005 
	 input.value += 5;
	 my_div.style.top = input.value+"px";
 }