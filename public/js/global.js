document.addEventListener("keydown", keyDownTextField, false);
function keyDownTextField(e) {
	var keyCode = e.keyCode;
	if(keyCode==55) {
	toggleSound();
	
	}
}
var musicNumber = 0;


var audio = new Audio('../music/openingtheme.mp3');
 var audio2 = new Audio('../music/trailtheme.mp3');
 
 if (musicNumber = 0) {
	 
 
function checkSound() {
    
    var currentSound = "true";//sessionStorage.getItem('soundStatus');
    
    console.log(currentSound);
    if (currentSound == "true") {
        // start music
        audio.play();
    } else {
        // Stop the music
        audio.pause();
    }
    
}
checkSound();

function toggleSound() {
    var currentSound = sessionStorage.getItem('soundStatus');
    if(currentSound == "true") {
        currentSound = "false";
		audio.play();
    }
    else {
        currentSound = "true";
		audio.pause();
    }
    console.log(currentSound);
    sessionStorage.setItem('soundStatus', currentSound)
}
 }
else {
	function checkSound() {
	
    var currentSound = "true";//sessionStorage.getItem('soundStatus');
    
    console.log(currentSound);
    if (currentSound == "true") {
        // start music
        audio2.play();
    } else {
        // Stop the music
        audio2.pause();
    }
    
}
checkSound();

function toggleSound() {
    var currentSound = sessionStorage.getItem('soundStatus');
    if(currentSound == "true") {
        currentSound = "false";
		audio2.play();
    }
    else {
        currentSound = "true";
		audio2.pause();
    }
    console.log(currentSound);
    sessionStorage.setItem('soundStatus', currentSound)
}
/*
    var myElement = document.getElementById("soundMenuItem");
    myElement.innerHTML = "Turn Sound " + (currentSound ? "Off" : "On &nbsp;&nbsp;"); 
    
    (window["isSoundOn"]) ? isSoundOn = true : isSoundOn = false;
    checkSound();
	
	
	
*/
}