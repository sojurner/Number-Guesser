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

applyButton.addEventListener('click', numParaGen);
guessBtn.addEventListener('click', guessCompare);
userNum.addEventListener('input', dsblResetClearBtn);
clearBtn.addEventListener('click', clearPage);
resetBtn.addEventListener('click', resetPage);

function numParaGen() {
  guessBtn.disabled = false; 
  parseMin = parseInt(miniNum.value) || 1;
  parseMax = parseInt(maxiNum.value) || 100;
  numberRange.innerText = 'Pick a # between ' + parseMin + ' and ' + parseMax
  randNumber = randNumGenerator()
}

function randNumGenerator() {
  return Math.floor(Math.random() * (parseMax - parseMin + 1)) + parseMin;   
}

function guessCompare () {
resetBtn.disabled = false;
  guessDisplay.innerText = userNum.value;
  numCompare();
}

function numCompare() {
  userGuess = parseInt(userNum.value);
  if (userGuess === randNumber) {
    indexRange(10);
    resetBtn.disabled = false;
    randNumber;
    feedBackDisplay.innerText = 'BOOM!';
  } else if (userGuess < parseMin || userGuess > parseMax || isNaN(parseInt(userNum.value))) {
    feedBackDisplay.innerText = 'Sorry the number (or the lack thereof) you have dialed is not valid. Please try again';
  }
  if (userGuess > randNumber) {
    feedBackDisplay.innerText = 'That is too high';
  } 
  if (userGuess < randNumber) {
    feedBackDisplay.innerText = 'That is too low';
  } 
}

function indexRange(n) {
  parseMin = parseMin - n;
  parseMax = parseMax + n;
}  

function clearPage() {
  userNumDisplay.innerText = '';
  feedBackDisplay.innerText = '';
  numberRange.innerText = '';
  miniNum.value = null;
  maxiNum.value = null;
  userNum.value = null;
}

function resetPage() {
 location.reload();
}

function dsblResetClearBtn() {
  if (userNum.value.length < 1) { 
    clearBtn.disabled = true; 
    resetBtn.disabled = true; 
  }   
  else { 
    clearBtn.disabled = false;
    resetBtn.disabled = false;
  }
}