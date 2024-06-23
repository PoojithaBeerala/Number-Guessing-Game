document.addEventListener('DOMContentLoaded', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    let attempts = 0;

    guessButton.addEventListener('click', function() {
        const userGuess = parseInt(guessInput.value);

        if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 100) {
            attempts++;

            if (userGuess === randomNumber) {
                message.textContent = Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.;
                message.style.color = 'green';
                guessInput.disabled = true;
                guessButton.disabled = true;
            } else if (userGuess < randomNumber) {
                message.textContent = 'Too low. Try again!';
                message.style.color = 'red';
            } else {
                message.textContent = 'Too high. Try again!';
                message.style.color = 'red';
            }
        } else {
            message.textContent = 'Please enter a valid number between 1 and 100.';
            message.style.color = 'red';
        }

        guessInput.value = '';
        guessInput.focus();
    });
});