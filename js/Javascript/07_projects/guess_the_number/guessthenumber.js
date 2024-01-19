let random = (parseInt(Math.random() * 100 + 1));
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector ('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let guessNo = 0

let playGame = true

if(playGame){
  submit.addEventListener('click', function(event){
    event.preventDefault();
    const guess = parseInt(userInput.value)
    validateGuess(guess);
  })
}
function validateGuess(guess){
  if(guess < 0 || guess > 100 || isNaN(guess)){
    alert('Enter a valid number between 1 and 100')
  } else {
    prevGuess.push(guess)
    if (guessNo === 9){
      displayGuess(guess)
      displayMessage(`Game over. The number was ${random}.`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)

    }
  }
}

function checkGuess(guess){
  if(guess === random){
    displayMessage("Correct!")
    endGame()
  } else if(guess < random){
    displayMessage("Guess is too low")
  } else if(guess > random){
    displayMessage("Guess is too high")
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}   `
  guessNo++
  remaining.innerHTML = `${10 - guessNo}`
}

function displayMessage(message){
  loworHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(event){
    random = (parseInt(Math.random() * 100 + 1));
    prevGuess = []
    guessNo = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - guessNo}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    displayMessage('')

    playGame = true
  });
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '') //it takes 2 parameters so we pass empty value as second parameter for boolean attributes
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p)
  playGame = false
  newGame()
}
