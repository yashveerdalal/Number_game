// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage('Please enter a valid number between 1 and 100');
        return;
    }

    if (guess === targetNumber) {
        setMessage(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
    } else if (guess < targetNumber) {
        setMessage('Too low! Try a higher number.');
    } else {
        setMessage('Too high! Try a lower number.');
    }
}

function setMessage(message) {
    document.getElementById('message').textContent = message;
}
