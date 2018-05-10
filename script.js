//------
//variables
//------
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
//var parseMin = parseInt(miniNum.value);
//var parseMax = parseInt(maxiNum.value);
//console.log("hello world");


//---------
//Calling Events
//---------
//Guess button click triggers --> enabling reset button; linking User's input guess to Display; calling function to compare user# to random# 
guessBtn.addEventListener('click', function() {
  resetBtn.disabled = false;
  guessDisplay.innerText = userNum.value;
  numCompare();
})

//Parameter button click triggers --> enabling guess|clear button; linking users min|max#s as parameters for random number generator
applyButton.addEventListener('click', function() {
  guessBtn.disabled = false; 
  clearBtn.disabled = false;
  parseMin = parseInt(miniNum.value, 10) || 1;
  parseMax = parseInt(maxiNum.value, 10) || 100;
  numberRange.innerText = 'Pick a # between ' + parseMin + ' and ' + parseMax
  randNumber = randNumGenerator()
  randNumGenerator();
  })

clearBtn.addEventListener('click', function() {
  clearPage()
})

resetBtn.addEventListener('click', function() {
  resetPage();
})

// Generating a Random Number
  function randNumGenerator() {
  //parseMin = parseInt(miniNum.value);
  //parseMax = parseInt(maxiNum.value);
    return Math.floor(Math.random() * parseMax - parseMin + parseMin);   
}

//Increasing Min and Max values
function indexRange(n) {
  parseMin = parseMin - n;
  parseMax = parseMax + n;
}  

//Comparing User's guess and random number generated
function numCompare() {
  userGuess = parseInt(userNum.value, 10);
  if (userGuess === randNumber) {
    randNumGenerator();
    indexRange(10);
   return feedBackDisplay.innerText = 'BOOM!';
     resetBtn.disabled = false;
  } 
  if (userGuess < parseMin || userGuess > parseMax) {
   return feedBackDisplay.innerText = 'Sorry the number you have dialed is out of reach. Please try again';
 }
  if (userGuess > randNumber) {
    return feedBackDisplay.innerText = 'That is too high';
  } 
  if (userGuess < randNumber) {
   return feedBackDisplay.innerText = 'That is too low';
  } 
  
}

function clearPage() {
  userNumDisplay.innerText = '';
  feedBackDisplay.innerText = '';
  numberRange.innerText = ''
  miniNum.value = '';
  maxiNum.value = '';
  userNum.value = '';
  userNum.value = null;
}
  
function resetPage() {
 location.reload();
}



//clearing functions




