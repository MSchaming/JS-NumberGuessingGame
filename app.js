/* 
GAME FUNCTION   
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if they lose
- Let player choose to play again
*/

//Game values
let min = 1,
    max =10,
    winningNum = 2,
    guessesLeft = 3;


//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assigning UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listne for guess
guessBtn.addEventListener('click', function(){
let guess = parseInt(guessInput.value);

//Validate Input, check that it's not blank or outside min & max
if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red'); //msg, color
}

//check if won
if(guess === winningNum){
    //disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor ='green';
    //set winning meesage
    setMessage(`Congratulations! ${winningNum} is correct! You are a winner!`, 'green');
}

});

//Set Message function

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
