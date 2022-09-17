
var exports = module.exports = {};

function gameData() {
	this.playerNames = [];
	this.profession = "";
	this.playerMoney = 1000;
	this.startMonth = "";
	this.groupHealth = 100;
	this.distanceTraveled = 0;
	this.distanceRemaining = 500;
	this.alivePeople = 5;
	this.remainingDays = 45;
	this.currentDay = 0;
	this.currentWeather = [];
	this.inGameMessages = [];
}
//parse


exports.startGameScreens = [];
exports.gameSettings = new gameData();

var startGame1 = "<p>Many kinds of people made the trip to Oregon.</p>"
+ "<p>You may:</p>"
+ "<ol id=\"setupQuestions1\" >"
+ "<li id=\"bankerMenuItem\">Be a banker from Boston</li>"
+ "<li id=\"carpenterMenuItem\">Be a carpenter from Ohio</li>"
+ "<li id=\"farmerMenuItem\">Be a farmer from Illinois</li>"
+ "<li id=\"differencesMenuItem\">Find out the differences between the choices</li>"
+ "</ol>"
+ "<div id=\"selectedOption\">What is your choice?</div>";



var startGame2 = "<p>What is the first name of the wagon leader</p>"
+ "Leader Name: <input id=\"player0\"/>"
+ "<button onclick=\"saveSetting1()\"> Next </button>"

var startGame3 = "<p>What are the first names of the other members of the party</p>"
+ "<ol id=\"setupQuestions3\" >"
+ "<li id=\"player1li\">Player Name: <input id=\"player1\"/></li>"
+ "<li id=\"player2li\">Player Name: <input id=\"player2\"/></li>"
+ "<li id=\"player3li\">Player Name: <input id=\"player3\"/></li>"
+ "<li id=\"player4li\">Player Name: <input id=\"player4\"/></li>"
+ "<button onclick=\"saveSetting2()\"> Save and Continue </button>"

var startGame4 = "<p>Select which month you would like to Start in</p>"
+ "<ol id=\"setupQuestions2\" >"
+ "<li id=\"month1MenuItem\">March</li>"
+ "<li id=\"month2MenuItem\">April</li>"
+ "<li id=\"month3MenuItem\">May</li>"
+ "<li id=\"month4MenuItem\">June</li>"
+ "</ol>"

var startGame5 = "<p>Settings</p>"
+ "<ol id=\"settingsPopulate\" >" 
+ "<li id=\"rPlayer1Name\">Wagon Leader: </li>"
+ "<li id=\"rPlayer2Name\">Party Member 1: </li>"
+ "<li id=\"rPlayer3Name\">Party Member 2: </li>"
+ "<li id=\"rPlayer4Name\">Party Member 3: </li>"
+ "<li id=\"rPlayer5Name\">Party Member 4: </li>"
+ "<li id=\"rProfession\">Profession: </li>"
+ "<li id=\"rMonth\">Starting Month: </li>"
+ "</ol>"
+ "<h1> Press Enter To Begin</h1>"

var startGame6 = "<p>Statistics</p>"
+ "<ol id=\"showSettings2\" >" 
+ "<li id=\"distance\">Distance Remaining: <ins id=\"distanceRemaining\"></ins></li>"
+ "<li id=\"health\">Group Health:  <ins id=\"groupHealth\"></ins></li>"
+ "<li id=\"status\">Group Status:  <ins id=\"groupStatus\"></ins></li>"
+ "<li id=\"weather\">Weather: <ins id=\"currentWeather\"></ins> </li>"
+ "<li id=\"pace\">Pace:  <ins id=\"currentPace\"></ins> </li>"
+ "<li id=\"terrain\">Terrain:  <ins id=\"currentTerrain\"></ins></li>"
+ "<li id=\"day\">Current Day: <ins id=\"currentDay\"></ins></li>"
+ "<li id=\"alive\">Party Members Alive: <ins id=\"alivePeople\"></ins></li>"
+ "<li id=\"alive1\">Player 1: <ins id=\"player1\"></ins></li>"
+ "<li id=\"alive2\">Player 2: <ins id=\"player2\"></ins></li>"
+ "<li id=\"alive3\">Player 3: <ins id=\"player3\"></ins></li>"
+ "<li id=\"alive4\">Player 4: <ins id=\"player4\"></ins></li>"
+ "<li id=\"alive5\">Player 5: <ins id=\"player5\"></ins></li>"
+ "</ol>"

var startGame7 = "<h4>Instructions</h4>"
+ "<p>The goal of the game is to travel to Oregon within 45 Days</p>"
+ "<p>You have to try to get there with as many people as you can</p>"
+ "<p>If your group health is poor or very poor there is a chance that someone may die</p>"
+ "<h5>Controls</h5>"
+ "<p>Enter: Advances a day</p>"
+ "<p>Space: Change the pace</p>"

exports.startGameScreens.push(startGame1);
exports.startGameScreens.push(startGame2);
exports.startGameScreens.push(startGame3);
exports.startGameScreens.push(startGame4);
exports.startGameScreens.push(startGame5);
exports.startGameScreens.push(startGame6);
exports.startGameScreens.push(startGame7);




//5 api calls
//pace
//nextDay - event listener - does fetch calls api advances day by
//weather (object) array 12 objects in array 
//currentWeather = warm.healthEffect
//weather name = warm, healtheffect = +1, mileEffect = 0;
//+ "<input type=\"button\"class\"button-1\" id=\page1sub\" value =\"Next\"/>"