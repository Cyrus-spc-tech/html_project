let submit = document.getElementById("submit");
let result = document.getElementById("result");
let randomNum = Math.floor(Math.random() * 100) + 1;
let attempt=0

function guessGame() {
    let guess = parseInt(document.getElementById("guess").value);

    if (guess === randomNum) {
        result.innerHTML = "Congratulations! You guessed the correct number in " + attempt + " attempts!";
    } else if (guess > randomNum) {
        result.innerHTML = "You guessed too high!";
        attempt++;
    } else if (guess < randomNum) {
        result.innerHTML = "You guessed too low!";
        attempt++;
    }

}

submit.addEventListener("click", guessGame);