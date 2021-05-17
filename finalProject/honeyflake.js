// js for virtual tip jar

//making basic classes for user profile and band profiles
class Profile {
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
		this.id = Math.floor(Math.random()* 10000);
		this.genres = [];
		this.favBands = [];
		this.addBand = function(band){
			this.favBands.push(band);
		}
		this.add = function (genre){
			this.genres.push(genre);
		}
	}
}

class Band{
	constructor(bandName){
		this.bandName = bandName;
		this.id = Math.floor(Math.random()* 10000);
		this.address = "123 guitar land";
		this.bandGenres = [];
		this.songs = ["01intro","02throughRainAndFire","03redGlove","04meheeko","05alphabetRhyme","06TROCK"];
		this.add = function (genre){
			this.bandGenres.push(genre);
		}
		
	}
}

var profile = new Profile("Chris", "Blaha");
	profile.add(" rock");
	profile.add(" blues");
	profile.add(" polka");

var band = new Band("Buddha gift");
	band.add(" funk");
	band.add(" rock");
	band.add(" hip hop");

//initiating to set divs to display the profile and band info
function init(){
	 setProfile();
	 //setBand();
	 checkForNewBand();
}

function bandInit(){
	setBand();
}

//setting up a mock user profile to display
function setProfile(){
	
	var profileName = document.getElementById("profileName");
	var profileId = document.getElementById("profileId");
	var profileGenres = document.getElementById("profileGenres");
	var profileBands = document.getElementById("profileBands");
	if(profileName&&profileId&&profileGenres&&profileBands){
		profileName.innerHTML = profile.firstName +" "+profile.lastName;
		profileId.innerHTML = profile.id;
		profileGenres.innerHTML = profile.genres;
		profileBands.innerHTML = profile.favBands;
	}else{alert("no id");
		return;
	}
	//profileDiv.innerHTML = "<span>" + profile.firstName + " " + profile.lastName + "<br>id " + profile.id + "<br>" + profile.genres + "<br>" + profile.favBands + "</span>";
}

//setting up a mock band profile to display
function setBand(){
	var bandTitle = document.getElementById("bandTitle");
	var bandLocation = document.getElementById("bandLocation");
	var bandStyle = document.getElementById("bandStyle");
	if(bandTitle&&bandLocation&&bandStyle){
		bandTitle.innerHTML = band.bandName;
		bandLocation.innerHTML = band.address;
		bandStyle.innerHTML = band.bandGenres;
	}
	
}
//functionality for choosing songs on the audio player
function playSong(song){
	var songChoice = document.getElementById(song);
	var player = document.getElementById("player");
	var title = document.getElementById("playerTitle");
	var audio = document.getElementById("audio");
	if(songChoice&&player&&title){
		var selection = "audio/"+ band.songs[song] + ".mp3";
		console.log(selection);
		console.log(song);
		audio.pause();
		player.setAttribute('src', selection);
		title.innerHTML = "Now Playing: " + band.songs[song];
		audio.load();
		audio.play();
		
	}else{
		console.log("no id");
		return;
	}
}

//runs through the user's prefered genres and checks for a match with the band's style of music.
function checkForNewBand(){
	var suggestion = document.getElementById("suggestion")
	for(i in profile.genres){
		for(j in band.bandGenres){
			if(i == j){
				suggestion.innerHTML = "add " + band.bandName + " to your band list?" 
			}else{
			 suggestion.innerHTML = "No new Bands.";
			}
		}
	}
}

function addBand(){
	profile.addBand(" " + band.bandName);
	setProfile();
	var suggestion = document.getElementById("suggestion");
	suggestion.innerHTML = "added " + band.bandName + " to your list!";
	setBand();
}

function removeBand(){
	var suggestion = document.getElementById("suggestion");
	suggestion.innerHTML = "no new bands.";
}

//function to pay the band.
function payBand(){
	var tipAmount = document.getElementById("tipAmount");
	var tipTotal = document.getElementById("tipTotal");
	var total = parseInt(tipTotal.innerHTML)+ parseInt(tipAmount.innerHTML);
	if (isNaN(total)){
		total = 0;
	}
	tipTotal.innerHTML = total;
	tipAmount.innerHTML = 0;
	
}

//function to watch a video as a tip.
function watchVid(){
	
	var adDiv = document.getElementById("ad");
	var adVid = document.getElementById("videoAd");
	adDiv.style.display = "block";
	//adVid.play();
	// adVid.addEventListener("ended",
		// adDiv.style.display = "none";
	// );
	
}