//Define Variables:
var wins=0; //Wins should start at 0 and increase by 1 after each win

var wordOptions = ['HELLO', 'GAME', 'JAVASCRIPT']; //Array of words that will be randomly selected for game 
var gameWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]; //generates random word from array
console.log(gameWord); 

var gameWordUnderscores = []; //shows underscores
var correctLetters = [];
var incorrectLetters = []; //Need to push incorrectly guessed letters to this array

var numOfGuessesRemaining = 10; //Allow 10 incorrect letter guess in each game

var userGuess;


//Functions:

//displays "_" for each letter in the gameWord
for (var i = 0; i<gameWord.length; i++) {  
    gameWordUnderscores.push('_');
   };

console.log(gameWordUnderscores);

//Captures letter key pressed by user and adds to array of correct letters guess or incorrect letters guessed. Replaces underscore with correct letter
document.onkeyup = function(event) {
    var pressedKey = String.fromCharCode(event.keyCode);
    //console.log(pressedKey)
    //console.log(gameWord.indexOf(pressedKey));
    if(gameWord.indexOf(pressedKey) > -1){
    //console.log(true);
    correctLetters.push(pressedKey);
    //console.log(correctLetters);  
    gameWordUnderscores[gameWord.indexOf(pressedKey)] = pressedKey;
    console.log(gameWordUnderscores);  
    }
    else {
    incorrectLetters.push(pressedKey);
    //console.log(incorrectLetters);
    }
  
    };

  
