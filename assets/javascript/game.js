//Define Variables:
var wins=0; //Wins should start at 0 and increase by 1 after each win

var wordOptions = ['CODE', 'GAME', 'PENCIL']; //Array of words that will be randomly selected for game 
var gameWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]; //generates random word from array
console.log(gameWord); 

var gameWordUnderscores = []; //shows underscores
var correctLetters = [];
var incorrectLetters = []; //Need to push incorrectly guessed letters to this array

var numOfGuessesRemaining = 10; //Allow 10 incorrect letter guess in each game


//Functions:

//need to add function to restart game

//displays "_" for each letter in the gameWord
for (var i = 0; i<gameWord.length; i++) {  
    gameWordUnderscores.push('_');
   
   };

console.log(gameWordUnderscores);
var userGuess = gameWordUnderscores.join(' ');
console.log(userGuess);
document.getElementById('currentWord').innerHTML = userGuess;
document.getElementById('remainingGuesses').innerHTML = numOfGuessesRemaining;
document.getElementById('numOfWins').innerHTML = wins;

//Captures letter key pressed by user and adds to array of correct letters guess or incorrect letters guessed. Replaces underscore with correct letter
document.onkeyup = function(event) 
{
  

    var pressedKey = String.fromCharCode(event.keyCode);
    console.log(pressedKey.type)
    console.log(gameWord.indexOf(pressedKey));

    if (event.keyCode >= 91 || event.keyCode <= 64) {
    alert('Please type a letter key to make a guess');
    }

    else if (incorrectLetters.includes(pressedKey)) {
       
      alert('You already guessed that!');
   }

   else if (gameWordUnderscores.includes(pressedKey)) {
       
      alert('You already guessed that!');
   }

    

    else if(gameWord.indexOf(pressedKey) > -1)
    {
    //console.log(true);
    correctLetters.push(pressedKey);
    //console.log(correctLetters);  
    
    gameWordUnderscores[gameWord.indexOf(pressedKey)] = pressedKey;
    console.log(gameWordUnderscores);
    document.getElementById('currentWord').innerHTML = gameWordUnderscores.join(' ');
   
  
 
    if (gameWordUnderscores.join('') === gameWord)
     {
        alert('You win!');
        wins++;
        document.getElementById('numOfWins').innerHTML = wins;
    }
    }

    

    

   
    else 
    {
   
    incorrectLetters.push(pressedKey);
    document.getElementById('lettersGuessed').innerHTML = incorrectLetters;
    var numOfGuessesRemaining = 10 - incorrectLetters.length; //removes one from number of guesses remaining each time incorrect letter is typed.
    //console.log(incorrectLetters);
    
    if (numOfGuessesRemaining===0){
       alert('You lose!');
    };

    console.log(numOfGuessesRemaining);
    document.getElementById('remainingGuesses').innerHTML = numOfGuessesRemaining;
    console.log(incorrectLetters);
    
   }
  
    };

    



  
