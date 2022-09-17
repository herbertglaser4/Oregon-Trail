const express = require('express')
const app = express()
app.use(express.static('public'));
app.get('/', function (req, res) {
		res.sendFile('public/views/index.html',{root:__dirname})
})

app.get('/mainmenu', function (req, res) {
		res.sendFile('/views/mainmenu.html',{root:__dirname})
})

app.get('/topten', function (req, res) {
		res.sendFile('/views/topten.html',{root:__dirname})
})

app.get('/game', function (req, res) {
		res.sendFile('/views/game.html',{root:__dirname})
})








app.get('/game/saveProfession/:profession', function(req, res){
game.gameSettings.profession = req.params.profession;
res.setHeader('Content-Type', 'text/html');
res.send(game.gameSettings.profession);

});

app.get('/game/savePlayerName/:playerId/:playerName', function(req, res) {
game.gameSettings.playerNames[req.params.playerId] = req.params.playerName;
res.setHeader('Content-Type', 'text/html');
res.send(game.gameSettings.playerNames);
});





app.get('/game/saveStartMonth/:startMonth', function(req, res) {
game.gameSettings.startMonth = req.params.startMonth;
res.setHeader('Content-Type', 'text/html');
res.send(game.gameSettings.startMonth);
});



app.get('/game/getSettings', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('access-control-allow-origin', "*");
	res.send(game.gameSettings);
	
});

var game = require('./controllers/gameController');

app.get('/game/getNewGameScreen/:screenId', function(req, res) {
	var gameScreen = game.startGameScreens[req.params.screenId];
	console.log("\n this is the main node file! \n" + gameScreen)
	res.setHeader('Content-Type', 'text/html');
	res.send(gameScreen);
})







app.listen(1337, function() {
	console.log('Example app listening on port 1337!')
})


/*
app.route('/game/topten')
	.get(topten.getTopScores)
	.post(topten.saveTopScores)
	*/
	