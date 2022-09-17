var groupHealth = 100;
var currentDay = 0;
var daysRemaining = 45 - currentDay;
var wagonMover = 1300;
var weatherStatus = 0;
var alivePeople = 5;
var distanceRemaining = 500;
var mileEffect = 0;
var healthEffect = 0;
var distanceTravel = 0;
var distance= 0;
var pace = 6;
var health = 0;
var weatherEffect = 0;
var deathCalc = 0;
var deathCalc2 = 0;
var deathCalc3 = 0;
var deathCalc4 = 0;
var deathCalc5 = 0;
var player1 = 0;
var player2 = 0;
var player3 = 0;
var player4 = 0;
var player5 = 0;
var shots = 0;
var huntScreen = 0;
var huntingCalc = 0;
var paceNumber = 0;
var random8 = (Math.random() * 5);
function gameFunctions () {
	if (pace == 6) {
		console.log ("nada");
	}
	else {
		distanceCalculator();
		terrainSetter();
		healthChanger();
		healthChecker();
		deathChecker();
		dayAdvance();	
	}
}
			
			function deathScreen() {
				window.location.assign("/views/deathscreen.html")
			}
			function terrainSetter(){
				
					if (distanceRemaining > 400) {
						document.getElementById("background").src = "../images/plains.jpg";
						document.getElementById("currentTerrain").innerHTML = "Plains";
					}
					else if (distanceRemaining > 300) {
						document.getElementById("background").src = "../images/forest.jpg";
						document.getElementById("currentTerrain").innerHTML = "Forest";
					}
					else if (distanceRemaining > 200) {
						document.getElementById("background").src = "../images/mountains.jpg";
						document.getElementById("currentTerrain").innerHTML = "Mountain";
					}
					else if (distanceRemaining > 100) {
						document.getElementById("background").src = "../images/desert.jpg";
						document.getElementById("currentTerrain").innerHTML = "Desert";
					}
					else {
						document.getElementById("background").src = "../images/grassland.jpg";
						document.getElementById("currentTerrain").innerHTML = "Grasslands";
					}
				
				
				
				
				
			}
			function distanceCalculator () {
				if (pace == 0) {
					distanceTravel = 20;
					distance = distanceTravel*mileEffect;
					distanceRemaining = distanceRemaining - distance;
				}
				else if(pace == 1) {
					distanceTravel = 25;
					distance = distanceTravel*mileEffect;
					distanceRemaining = distanceRemaining - distance;
				}
				else if(pace == 2) {
					distanceTravel = 30;
					distance = distanceTravel*mileEffect;
					distanceRemaining = distanceRemaining - distance;
				}
				else if(pace == 3) {
					distanceTravel = 0;
				}
				else {
					console.log("oh no");
				}
			}
			function deathChecker () {
				
				if (groupHealth < 50 && groupHealth >= 20) {
					var deathCalc = 0;
					var deathCalc2 = 0;
					var deathCalc3 = 0;
					var deathCalc4 = 0;
					var deathCalc5 = 0;
					var random2 = (Math.random() * 100);
					var random4 = (Math.random() * 100);
					var random5 = (Math.random() * 100);
					var random6 = (Math.random() * 100);
					var random7 = (Math.random() * 100);
					deathCalc = deathCalc + random2;
					deathCalc2 = deathCalc2 + random4;
					deathCalc3 = deathCalc3 + random5;
					deathCalc4 = deathCalc4 + random6;
					deathCalc5 = deathCalc5 + random7;
					
					if (player1 == 0){
					if (deathCalc < 3) {
						console.log("dead");
						alivePeople = alivePeople - 1;
						modal2.style.display = "block";
						player1 = player1 + 1;
						if (alivePeople == 0){
							deathScreen();
						}
					}
					}
					if (player2 == 0) {
					if (deathCalc2 < 3) {
						console.log("dead");
						alivePeople = alivePeople - 1;
						modal2.style.display = "block";
						player2 = player2 + 1;
						if (alivePeople == 0){
							deathScreen();
						}
					}
					}
					if (player3 == 0) {
					if (deathCalc3 < 3) {
						console.log("dead");
						alivePeople = alivePeople - 1;
						modal2.style.display = "block";
						player3 = player3 + 1;
						if (alivePeople == 0){
							deathScreen();
						}
					}
					}
					if (player4 == 0) {
					if (deathCalc4 < 3) {
						console.log("dead");
						alivePeople = alivePeople - 1;
						modal2.style.display = "block";
						player4 = player4 + 1;
						if (alivePeople == 0){
							deathScreen();
						}
					}
					}
					if (player5 == 0) {
					if (deathCalc5 < 3) {
						console.log("dead");
						alivePeople = alivePeople - 1;
						modal2.style.display = "block";
						player5 = player5 + 1;
						if (alivePeople == 0){
							deathScreen();
						}
					}
					}
				}
				else if (groupHealth < 20) {
					
					var deathCalc = 0;
					var deathCalc2 = 0;
					var deathCalc3 = 0;
					var deathCalc4 = 0;
					var deathCalc5 = 0;
					var random2 = (Math.random() * 100);
					var random4 = (Math.random() * 100);
					var random5 = (Math.random() * 100);
					var random6 = (Math.random() * 100);
					var random7 = (Math.random() * 100);
					deathCalc = deathCalc + random2;
					deathCalc2 = deathCalc2 + random4;
					deathCalc3 = deathCalc3 + random5;
					deathCalc4 = deathCalc4 + random6;
					deathCalc5 = deathCalc5 + random7;
					
					
					if (player1 == 0){
					if (deathCalc < 10) {
						console.log("dead");
						alivePeople = alivePeople - 1;
						modal2.style.display = "block";
						player1 = player1 + 1;
						if (alivePeople == 0){
							deathScreen();
						}
					}
					}
					if (player2 == 0){
					if (deathCalc2 < 10) {
						console.log("dead");
						alivePeople = alivePeople - 1;
						modal2.style.display = "block";
						player2 = player2 + 1;
						if (alivePeople == 0){
							deathScreen();
						}
					}
					}
					if (player3 == 0){
					if (deathCalc3 < 10) {
						console.log("dead");
						alivePeople = alivePeople - 1;
						modal2.style.display = "block";
						player3 = player3 + 1;
						if (alivePeople == 0){
							deathScreen();
						}
					}
					}
					if (player4 == 0){
					if (deathCalc4 < 10) {
						console.log("dead");
						alivePeople = alivePeople - 1;
						modal2.style.display = "block";
						player4 = player4 + 1;
						if (alivePeople == 0){
							deathScreen();
						}
					}
					}
					if (player5 == 0){
					if (deathCalc5 < 10) {
						console.log("dead");
						alivePeople = alivePeople - 1;
						modal2.style.display = "block";
						player5 = player5 + 1;
						if (alivePeople == 0){
							deathScreen();
						}
					}
					}
				}
					
					}
			function dayAdvance() {
				currentDay = currentDay + 1;
				document.getElementById("currentDay").innerHTML = currentDay;
				document.getElementById("alivePeople").innerHTML = alivePeople;

				
				if (player1 == 0){
					document.getElementById("player1").innerHTML = "Alive";
				}
				if (player1 > 0) {
					document.getElementById("player1").innerHTML = "Dead";
				}
				if (player2 == 0){
					document.getElementById("player2").innerHTML = "Alive";
				}
				if (player2 > 0) {
					document.getElementById("player2").innerHTML = "Dead";
				}
				if (player3 == 0){
					document.getElementById("player3").innerHTML = "Alive";
				}
				if (player3 > 0) {
					document.getElementById("player3").innerHTML = "Dead";
				}if (player4 == 0){
					document.getElementById("player4").innerHTML = "Alive";
				}
				if (player4 > 0) {
					document.getElementById("player4").innerHTML = "Dead";
				}
				if (player5 == 0){
					document.getElementById("player5").innerHTML = "Alive";
				}
				if (player5 > 0) {
					document.getElementById("player5").innerHTML = "Dead";
				}
				
				console.log("random = " + random8)
				if (distanceRemaining == 0 || distanceRemaining < 0) {
					var score = alivePeople*groupHealth*daysRemaining;
					modal3.style.display = "block";
					document.getElementById("score").innerHTML = "Score: " + score;
				}
				
				if (currentDay == 46){
					deathScreen();
				}
			}
			function healthChanger(){
				var health = 0;
				
				if (pace == 0) {
				health = health + weatherEffect;
				groupHealth = groupHealth + health;
				document.getElementById("groupHealth").innerHTML = groupHealth;
				}
				else if (pace == 1) {
				health = health + healthEffect + weatherEffect;
				groupHealth = groupHealth + health;
				document.getElementById("groupHealth").innerHTML = groupHealth;
				}
				else if (pace == 2) {
				health = health + healthEffect + weatherEffect;
				groupHealth = groupHealth + health;
				document.getElementById("groupHealth").innerHTML = groupHealth;
				}
				else if (pace == 3) {
				
				groupHealth = groupHealth + 5;
				document.getElementById("groupHealth").innerHTML = groupHealth;
				}
				else {}
			}
			function healthChecker(){
	if (groupHealth >= 80){
		document.getElementById("groupStatus").innerHTML = good.healthName;
		console.log("good");
	}
	else if (groupHealth >= 50){
		document.getElementById("groupStatus").innerHTML = fair.healthName;
		console.log("fair");
	}
	else if (groupHealth >= 20){
		document.getElementById("groupStatus").innerHTML = poor.healthName;
		console.log("poor");
	}
	else if (groupHealth < 20 && groupHealth >= 0){
		document.getElementById("groupStatus").innerHTML = veryPoor.healthName;
		console.log("very poor");
	}
	else if (groupHealth < 0){
		document.getElementById("groupStatus").innerHTML = dead.healthName;
		window.location.assign("/views/deathscreen.html");
	}
	else {}
}
			function shoot() {
				groupHealth = groupHealth + 5;
				shots = shots + 1;
				huntingChecker();
			}
			function shootmiss() {
				shots = shots + 1;
				huntingChecker();
			}
			function huntingChecker(){
				if (huntScreen == 1){
					if (shots == 1){
					var gamer = document.getElementById('game');
					gamer.style.display = "block";
					huntingCalc = huntingCalc + 1;
				}
				}
				if (huntScreen == 2){
					if (shots == 2){
					var gamer = document.getElementById('game');
					gamer.style.display = "block";
					huntingCalc = huntingCalc + 1;
				}
				}
				if (huntScreen == 3){
					if (shots == 4){
					var gamer = document.getElementById('game');
					gamer.style.display = "block";
					huntingCalc = huntingCalc + 1;
				}
				}
				}

				
				
				
document.addEventListener("keydown", keyDownTextField, false);
function keyDownTextField(e) {
	var keyCode = e.keyCode;
	if(keyCode==13) {
		if (wagonMover > 0){
			var weatherNumber = 0;
			var random = (Math.random() * 100);
			weatherNumber = weatherNumber + random;
			document.getElementById("wagon").style.left = wagonMover + "px"; 
		if (pace == 3) {
			console.log("resting");
		}
		else if (pace == 6) {
					console.log("resting");
		}
			else {
			wagonMover = wagonMover - distance -25;
			console.log("number " + wagonMover);
		}
if (weatherNumber >= 0 && weatherNumber < 4) {
	console.log("Blizzard");
	document.getElementById("currentWeather").innerHTML = blizzard.weatherName
	mileEffect = blizzard.mileEffect;
	weatherEffect = blizzard.healthEffect;
	gameFunctions();
	document.getElementById("distanceRemaining").innerHTML = distanceRemaining;
	
}
else if (weatherNumber >= 5 && weatherNumber < 9) {
	console.log("Snow");
	document.getElementById("currentWeather").innerHTML = snow.weatherName
	mileEffect = snow.mileEffect;
	weatherEffect = snow.healthEffect;
	gameFunctions();
	document.getElementById("distanceRemaining").innerHTML = distanceRemaining;
	
}
else if (weatherNumber >= 10 && weatherNumber < 14) {
	console.log("Heavy Fog");
	document.getElementById("currentWeather").innerHTML = heavyFog.weatherName
	mileEffect = heavyFog.mileEffect;
	weatherEffect = heavyFog.healthEffect;
	gameFunctions();
	document.getElementById("distanceRemaining").innerHTML = distanceRemaining;
	
}
else if (weatherNumber >= 15 && weatherNumber < 19) {
	console.log("Heavy Rain");
	document.getElementById("currentWeather").innerHTML = heavyRain.weatherName
	mileEffect = heavyRain.mileEffect;
	weatherEffect = heavyRain.healthEffect;
	gameFunctions();
	document.getElementById("distanceRemaining").innerHTML = distanceRemaining;
	
}
else if (weatherNumber >= 20 && weatherNumber < 29) {
	console.log("Rain");
	document.getElementById("currentWeather").innerHTML = rain.weatherName
	mileEffect = rain.mileEffect;
	weatherEffect = rain.healthEffect;
	gameFunctions();
	document.getElementById("distanceRemaining").innerHTML = distanceRemaining;
	
}
else if (weatherNumber >= 30 && weatherNumber < 39) {
	console.log("Very Cold");
	document.getElementById("currentWeather").innerHTML = veryCold.weatherName
	mileEffect = veryCold.mileEffect;
	weatherEffect = veryCold.healthEffect;
	gameFunctions();
	document.getElementById("distanceRemaining").innerHTML = distanceRemaining;

}
else if (weatherNumber >= 40 && weatherNumber < 49) {
	console.log("Cold");
	document.getElementById("currentWeather").innerHTML = cold.weatherName
	mileEffect = cold.mileEffect;
	weatherEffect = cold.healthEffect;
	gameFunctions();
	document.getElementById("distanceRemaining").innerHTML = distanceRemaining;
	
}
else if (weatherNumber >= 50 && weatherNumber < 59) {
	console.log("Cool");
	document.getElementById("currentWeather").innerHTML = cool.weatherName
	mileEffect = cool.mileEffect;
	weatherEffect = cool.healthEffect;
	gameFunctions();
	document.getElementById("distanceRemaining").innerHTML = distanceRemaining;
	
	
}
else if (weatherNumber >= 60 && weatherNumber < 79) {
	console.log("Warm");
	document.getElementById("currentWeather").innerHTML = warm.weatherName
	mileEffect = warm.mileEffect;
	weatherEffect = warm.healthEffect;
	gameFunctions();
	document.getElementById("distanceRemaining").innerHTML = distanceRemaining;
	

}
else if (weatherNumber >= 80 && weatherNumber < 89) {
	console.log("Hot");
	document.getElementById("currentWeather").innerHTML = hot.weatherName
	mileEffect = hot.mileEffect;
	weatherEffect = hot.healthEffect;
	gameFunctions();
	document.getElementById("distanceRemaining").innerHTML = distanceRemaining;
}
else  {
	console.log("Very Hot");
	document.getElementById("currentWeather").innerHTML = veryHot.weatherName
	mileEffect = veryHot.mileEffect;
	weatherEffect = veryHot.healthEffect;
	gameFunctions();
	document.getElementById("distanceRemaining").innerHTML = distanceRemaining;
}

}
	else {
		console.log("nomore");
	}
	

}
	if(keyCode==32) {
	modal.style.display = "block";
	var paceNumber = 0;
	
	if (paceNumber == 0) {
	
	document.addEventListener("keydown", keyDownTextField2, false);
	function keyDownTextField2(e) {
	var keyCode2 = e.keyCode;
		 if(keyCode2==49) {
		document.getElementById("currentPace").innerHTML = steady.paceName;
		
		pace = 0;
		healthEffect = steady.healthEffect;
		paceNumber = paceNumber + 1;
		modal.style.display = "none";
		
		 }
		if(keyCode2==50) {
		document.getElementById("currentPace").innerHTML = strenuous.paceName;
		healthEffect = strenuous.healthEffect;
		paceNumber = paceNumber + 1;
		pace = 1 ;
		modal.style.display = "none";
		 
		 }
		if(keyCode2==51) {
		document.getElementById("currentPace").innerHTML = grueling.paceName;
		healthEffect = grueling.healthEffect;
		paceNumber = paceNumber + 1;
		pace = 2;
		modal.style.display = "none";
	
		 }
		if(keyCode2==52) {
		document.getElementById("currentPace").innerHTML = resting.paceName;
		healthEffect = resting.healthEffect;
		paceNumber = paceNumber + 1;
		 pace = 3;
		modal.style.display = "none";
		 
		 }
			
		 }
		  }
		}	
	if(keyCode==53) {
			 paceNumber = paceNumber + 1;
			 modal.style.display = "none";
			  if (huntingCalc == 0){
			var gamer = document.getElementById('game');
			var minigame = document.getElementById('minigame');
			var minigame2 = document.getElementById('minigame2');
			var animal1 = document.getElementById('animal1');
			var animal2 = document.getElementById('animal2');
			var animal3 = document.getElementById('animal3');
			var animal4 = document.getElementById('animal4');
			var animal5 = document.getElementById('animal5');
			var animal6 = document.getElementById('animal6');
			var animal7 = document.getElementById('animal7');
			
			
			if (random8 > 3){
				gamer.style.display = "none";
				animal2.style.display = "none";
				animal3.style.display = "none";
				animal4.style.display = "none";
				animal5.style.display = "none";
				animal6.style.display = "none";
				animal7.style.display = "none";
				huntScreen = huntScreen + 1;
			console.log("hunter1");
				
			}
			else if (random8 >= 2 && random8 < 3){
				gamer.style.display = "none";
				animal1.style.display = "none";
				animal4.style.display = "none";
				animal5.style.display = "none";
				animal6.style.display = "none";
				animal7.style.display = "none";
				minigame.style.display = "none";
				console.log("hunter2");
				huntScreen = huntScreen + 2;
				
				
			}
			else if (random8 < 2){
				gamer.style.display = "none";
				animal1.style.display = "none";
				animal2.style.display = "none";
				animal3.style.display = "none";
				minigame.style.display = "none";
				minigame2.style.display = 'none';
				huntScreen = huntScreen + 3;
				console.log("hunter: ");
				
			}
		
	}
	} 
}



	
// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
	modal2.style.display = "none";
	paceNumber = 0;
	
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
		
		paceNumber = 0;
    }
	 if (event.target == modal2) {
       
		modal2.style.display = "none";
		paceNumber = 0;
    }
}



function gameScreen(screenNumber) {
var infobox = document.getElementById("infobox");
fetch('/game/getNewGameScreen/' + screenNumber).then(function(response) {
if (response.status !== 200) {
console.log('problem with ajax call! ' + response.status + " msg: " +
response.value);

return;

}
response.text().then(function(data) {
infobox.innerHTML = data;

})
});
}
gameScreen(5);


//Weather Variables
var veryHot = {
	weatherName:"Very Hot",
	healthEffect : -8,
	mileEffect : .7,
}
var warm = {
	weatherName:"Warm",
	healthEffect : 1,
	mileEffect : 1,
}
var hot = {
	weatherName:"Hot",
	healthEffect : -3,
	mileEffect : .9,
}
var cool = {
	weatherName:"Cool",
	healthEffect : 1,
	mileEffect : .95,
}
var cold = {
	weatherName:"Cold",
	healthEffect : -5,
	mileEffect : .8,
}
var veryCold = {
	weatherName:"Very Cold",
	healthEffect : -12,
	mileEffect : .7,
}
var rain = {
	weatherName:"Rain",
	healthEffect : -4,
	mileEffect : .6,
}
var heavyRain = {
	weatherName:"Heavy Rain",
	healthEffect : -8,
	mileEffect : .4,
}
var snow = {
	weatherName:"Snow",
	healthEffect : -15,
	mileEffect : .3,
}
var blizzard = {
	weatherName:"Blizzard",
	healthEffect : -30,
	mileEffect : .1,
}
var heavyFog = {
	weatherName:"Heavy Fog",
	healthEffect : -3,
	mileEffect : .5,
}


//Pace Variables
var steady = {
	paceName:"Steady",
	healthEffect : 0,
	distanceTravel : 20,
}
var strenuous = {
	paceName:"Strenuous",
	healthEffect : -3,
	distanceTravel : 25,
}
var grueling = {
	paceName:"Grueling",
	healthEffect : -8,
	distanceTravel : 30,
}
var resting = {
	paceName:"Resting",
	healthEffect : 5,
	distanceTravel : 0,
}




//Group Health Status

var good = {
	healthName:"Good",

}
var fair = {
	healthName:"Fair",
	
}
var poor = {
	healthName:"Poor",
	
}
var veryPoor = {
	healthName:"Very Poor",
	
}
var dead = {
	healthName:"Dead",
	
}






