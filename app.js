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
    //Game Over- Won
    gameOver(true, `Congratulations! ${winningNum} is correct! You are a winner!`);

} else {
//guess the wong number
guessesLeft -= 1;

    if(guessesLeft === 0){
        //Game Over- Lost
    
        gameOver(false, `Sorry! You have used all your guesses.  The correct number was ${winningNum}. Game Over`);

    } else {
        //game continues- answer wrong
        //Change Border Color
        guessInput.style.borderColor ='red';
        //Clear the input
        guessInput.value = '';
        //Tell user it is the wrong number
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'blue');

    }

}

});


//Game Over

function gameOver(won, msg){
let color;
won === true ? color ='green' : color = 'red';
//disable input
guessInput.disabled = true;
//change border color
guessInput.style.borderColor = color;
//set text color
message.style.color = color;
//set winning meesage
setMessage(msg);
}

//Set Message function

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
