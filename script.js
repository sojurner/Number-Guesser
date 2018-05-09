//------
//variables
//------
var userNum = document.querySelector('#guessBox');
var guessBtn = document.querySelector('#guessButton');
var display = document.querySelector('#guessfeedback')
var applyButton = document.querySelector('.minMaxButton');
var miniNum = document.querySelector('#minNum');
var maxiNum = document.querySelector('#maxNum');
var clearBtn = document.querySelector('#clearButton');
var parseMin = parseInt(miniNum.value);
var parseMax = parseInt(maxiNum.value);
//console.log("hello world");

//-------
//function
//Plz work

// Generating a Random Number
  function randNumGenerator() {
  parseMin = parseInt(miniNum.value);
  parseMax = parseInt(maxiNum.value);
    return Math.floor(Math.random() * parseMax - parseMin + parseMin);   
}

//Increasing Min and Max values
function indexRange(n) {
  miniNum.value = miniNum.value - n;
  maxiNum.value = maxiNum.value + n;
}  

//Comparing User's guess and random number generated
function numCompare() {
  userGuess = parseInt(userNum.value, 10);
  if (userGuess === randNumber) {
    indexRange(10);
   return display.innerText = 'BOOM!';
     resetButton.disabled = false;
  } 
  if (userGuess > randNumber) {
    return display.innerText = 'That is too high';
  } 
  if (userGuess < randNumber) {
   return display.innerText = 'That is too low';
  } 
  if (userGuess < parseMin || userGuess > parseMax) {
   return display.innerText = 'Sorry the number you have dialed is out of reach. Please try again';
 }
}

function resetPage() {
  display.innerText = " ";
  userNum.value = null;
  randomNumGenerator();
}
  

//clearing functions


//---------
//Calling Events
//---------

//linking users guess to Display
guessBtn.addEventListener('click', function() {
  clearBtn.disabled = false;
  guessDisplay.innerText = userNum.value;
  numCompare();
})

//linking min max apply button as parameters to random number generator
applyButton.addEventListener('click', function() {
  randNumber = randNumGenerator(parseMin, parseMax, 10);
  guessBtn.disabled = false; 
  })

//clear fields
resetButton.addEventListener('click', function() {
  resetPage();
});


