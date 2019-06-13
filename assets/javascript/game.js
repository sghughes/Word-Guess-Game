//Define Variables:
var wins=0; //Wins should start at 0 and increase by 1 after each win

var wordOptions = ['CODE', 'GAME', 'PENCIL']; //Array of words that will be randomly selected for game 
var gameWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]; //generates random word from array
console.log(gameWord); 
var gameWordArray = [];

var gameWordUnderscores = []; //shows underscores
var correctLetters = []; //correct letters guessed pushed to this array
var incorrectLetters = []; //incorrect letters guessed pushed to this array
var winsHTML =  document.getElementById('numOfWins');
var numOfGuessesRemaining = 10; //Allow 10 incorrect letter guess in each game
var incorrectLettersHTML =  document.getElementById('lettersGuessed');
var currentWordHTML = document.getElementById('currentWord');
var numOfGuessesRemainingHTML = document.getElementById('remainingGuesses');

//Functions:
//add start function

function gameWordSplit () {
   gameWordArray = gameWord.split('');
}

function randomWord () {
   gameWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]; //generates random word from array
console.log(gameWord); 
}

//function to restart game:
function reset () {
  
   currentWordHTML.textContent = randomWord ();
  console.log(gameWord);
// for (var i = gameWordUnderscores.length; i>0; i--) {
//    gameWordUnderscores.pop();
//    console.log(gameWordUnderscores);
// }
gameWordSplit();
console.log(gameWordArray);


gameWordUnderscores = [];
correctLetters = [];
incorrectLetters = [];
//console.log(incorrectLetters);

numOfGuessesRemaining = 10;
//console.log(numOfGuessesRemaining);

incorrectLettersHTML.textContent = incorrectLetters;
winsHTML.textContent = wins; 
currentWordHTML.textContent = userGuess;
numOfGuessesRemainingHTML.textContent = numOfGuessesRemaining;

// for (var j=correctLetters.length; j>0; j--){
//    correctLetters.pop();
//    console.log(correctLetters);
// }
// for (var k=incorrectLetters; k>0; k--){
//    incorrectLetters.pop();
//    console.log('incorrectletters:' + incorrectLetters);
// }
for (var i = 0; i<gameWord.length; i++) {  
   gameWordUnderscores.push('_');
   };
   document.getElementById('currentWord').innerHTML = gameWordUnderscores.join(' ');

}

//displays "_" for each letter in the gameWord
for (var i = 0; i<gameWord.length; i++) {  
   gameWordUnderscores.push('_');
   };

//console.log(gameWordUnderscores);
var userGuess = gameWordUnderscores.join(' ');
//console.log(userGuess);
document.getElementById('currentWord').innerHTML = userGuess; 
document.getElementById('remainingGuesses').innerHTML = numOfGuessesRemaining;
document.getElementById('numOfWins').innerHTML = wins;

// function start(){}
//start ()

//Captures letter key pressed by user and converts from character code to string. 
document.onkeyup = function(event) 
{
   var pressedKey = String.fromCharCode(event.keyCode);
   //console.log(pressedKey.type)
   //console.log(gameWord.indexOf(pressedKey));

   //Limits guesses to letter keys
   if (event.keyCode >= 91 || event.keyCode <= 64) {
   alert('Please type a letter key to make a guess');
   }

   //Prevents guessing the same letter twice
   else if (incorrectLetters.includes(pressedKey)) {    
   alert('You already guessed that!');
   }

   else if (gameWordUnderscores.includes(pressedKey)) {  
   alert('You already guessed that!');
   }

   else if(gameWord.indexOf(pressedKey) > -1)
   {
   //console.log(true);
   
   
   correctLetters.push(pressedKey); //add for loop for going through game word with mult
   //console.log(correctLetters);  
    
   gameWordUnderscores[gameWord.indexOf(pressedKey)] = pressedKey;
   console.log(gameWordUnderscores);
   document.getElementById('currentWord').innerHTML = gameWordUnderscores.join(' ');
   
   
  
 
   if (gameWordUnderscores.join('') === gameWord)
   {
   alert('You win!');
   wins++;
   winsHTML.textContent = wins;
   reset ();     
   }
   }

   else 
   {
   
   incorrectLetters.push(pressedKey);
   document.getElementById('lettersGuessed').innerHTML = incorrectLetters;
   var numOfGuessesRemaining = 10 - incorrectLetters.length; //removes one from number of guesses remaining each time incorrect letter is typed.
   //console.log(incorrectLetters);
    
   console.log(numOfGuessesRemaining);
   document.getElementById('remainingGuesses').innerHTML = numOfGuessesRemaining;
   console.log(incorrectLetters);
};
    
   if (numOfGuessesRemaining===0){
   alert('You lose!');
   reset ();   
   };

   };

    

    



  
