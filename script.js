//---------
//variables
//---------
var userNum = document.querySelector('#guessBox');
var guessBtn = document.querySelector('#guessButton');
var userNumDisplay = document.querySelector('#guessDisplay');
var feedBackDisplay = document.querySelector('#guessfeedback')
var applyButton = document.querySelector('#minMaxButton');
var miniNum = document.querySelector('#minNum');
var maxiNum = document.querySelector('#maxNum');
var numberRange = document.querySelector('#numRange')
var clearBtn = document.querySelector('#clearButton');
var resetBtn = document.querySelector('#resetButton');

//--------------
//Calling Events
//--------------
//Parameter button click
applyButton.addEventListener('click', function() {
  numParaGen();
})
//Guess button click 
guessBtn.addEventListener('click', function() {
  guessCompare();
})

clearBtn.addEventListener('click', function() {
  clearPage();
})

resetBtn.addEventListener('click', function() {
  resetPage();
})

//----------------
//Functions
//----------------
//enabling guess|clear button; linking users min|max#s as parameters for random number generator
function numParaGen() {
  guessBtn.disabled = false; 
  clearBtn.disabled = false;
  parseMin = parseInt(miniNum.value, 10) || 1;
  parseMax = parseInt(maxiNum.value, 10) || 100;
  numberRange.innerText = 'Pick a # between ' + parseMin + ' and ' + parseMax
  randNumber = randNumGenerator()
  randNumGenerator();
}
//Generating a Random Number
  function randNumGenerator() {
    return Math.floor(Math.random() * (parseMax - parseMin) + 1);   
}
//enabling reset button; linking User's input guess to Display; calling function to compare user# to random# 
function guessCompare () {
resetBtn.disabled = false;
  guessDisplay.innerText = userNum.value;
  numCompare();
}
//Comparing User's guess and random number generated
function numCompare() {
  userGuess = parseInt(userNum.value, 10);
  if (userGuess === randNumber) {
    indexRange(10);
   return feedBackDisplay.innerText = 'BOOM!';
     resetBtn.disabled = false;
     randNumGenerator();
  } 
  if (userGuess < parseMin || userGuess > parseMax || isNaN(parseInt(userNum.value))) {
   return feedBackDisplay.innerText = 'Sorry the number (or the lack thereof) you have dialed is not valid. Please try again';
  }
  if (userGuess > randNumber) {
    return feedBackDisplay.innerText = 'That is too high';
  } 
  if (userGuess < randNumber) {
   return feedBackDisplay.innerText = 'That is too low';
  } 
}
//Increasing Min and Max values
function indexRange(n) {
  parseMin = parseMin - n;
  parseMax = parseMax + n;
}  
//Clearing 
function clearPage() {
  userNumDisplay.innerText = '';
  feedBackDisplay.innerText = '';
  numberRange.innerText = ''
  miniNum.value = '';
  maxiNum.value = '';
  userNum.value = '';
  userNum.value = null;
}
//Reloads page
function resetPage() {
 location.reload();
}






