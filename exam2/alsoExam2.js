// js template

	var chatArray = [];
	var recordArray = [];

function changeColor(boxId){
	var box = document.getElementById(boxId);
	box.style.backgroundColor = boxId;
	chatArray.push(boxId);
	if(document.getElementById("start_button").style.display == "none"){
		if(recordArray.length < 4){
			recordArray.push(boxId);
		}
	}
	console.log(chatArray);
	chat();
	setTimeout(function(){
		box.style.backgroundColor = "grey";
	},1000);
}


function chat(){
	var chatDiv = document.getElementById("chat");
	chatDiv.innerHTML = "";
	var text = "";
	for(i= chatArray.length-1; i>=0; i-- ){
		
		text += " " + chatArray[i];
	}
	chatDiv.innerHTML = text;
}

function startRecording(){
	var playButton = document.getElementById("play_button");
	var recordButton = document.getElementById("start_button");
	recordButton.style.display = "none";
	if(recordArray.length == 4){
		playButton.style.display = "inline-block";
	}
	
}