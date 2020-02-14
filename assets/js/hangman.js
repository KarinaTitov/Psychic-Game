// Array
var words = ["Russia", "China", "France", "Japan", "Germany"];

// Pick a word
var wordChosen = words[Math.floor(Math.random() * words.length)];
var underScore = [];
var rightWords = [];
var wrongWords = [];



 var docUnderScore = document.getElementById("underscore");
 var docRightGuess = document.getElementById("rightguess");
 var docWrongGuess = document.getElementById("wrongguess");
 
 
 console.log(wordChosen);


// underscore = word length
var genUnderScores = () => {
    for (var i = 0; i < wordChosen.length; i++ ) {
    underScore.push ("_");
}
    return underScore;
}

 
// User guess
document.addEventListener("keypress", (event) => {
   var keycode = event.keyCode;
   var keyWord = String.fromCharCode(keycode);
   // If right > right array
   if(wordChosen.indexOf(keyWord) > -1) {
    rightWords.push(keyWord);
    // Replace the underscore with the letter
    underscore[wordChosen.indexOf(keyWord)] = keyWord;
    docUnderScore[0].innerHTML = underscore.join(" ");
    docRightGuess[0].innerHTML = rightWords;
    
  if(underScore.join("") == wordChosen) {
       alert("You Winner!!!");
   }  
}
   // If wrong > wrong array
   else wrongWords.push(keyWord);
  docWrongGuess[0].innerHTML = wrongWords;

});

docUnderScore[0].innerHTML = genUnderScores().join(" ");





