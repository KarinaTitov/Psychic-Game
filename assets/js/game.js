var myChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var myGuess = [];



window.onload = function() {
	var compGuess = myChoices[Math.floor(Math.random() * myChoices.length)];
	myGuess.push(myGuess);
	console.log(myGuess[0]);
}



document.onkeyup = function(event) {
	var yourGuess = event.key;
	lettersGuessed.push(yourGuess);
	console.log(myGuess[0]);

if ((yourGuess === myGuess[0]) && (guessesLeft > 0)) {
	wins++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	myGuess.length = 0;
	var compGuess = myChoices[Math.floor(Math.random() * myChoices.length)];
	myGuess.push(compGuess);
	console.log(myGuess[0]);
}

else if ((yourGuess !== myGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

else {
	losses++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	myGuess.length = 0;
	var compGuess = myChoices[Math.floor(Math.random() * myChoices.length)];
	myGuess.push(compGuess);
	console.log(myGuess[0]);
}

var html = "<p>Guess the letter:</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Attempts left: " + guessesLeft + "</p>" +
          "<p>Your guesses : " + lettersGuessed + "</p>";
 
document.querySelector("#psychicgame").innerHTML = html;

}