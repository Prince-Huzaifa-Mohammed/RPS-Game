function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function choose(choice) {
    const computerChoice = getComputerChoice();
    displayResults([choice, computerChoice]);
    displayWinner([choice, computerChoice]);
}

function displayResults(results) {
    resultDivs.forEach((resultDiv, index) => {
        setTimeout(() => {
            resultDiv.innerHTML = `
                <div class="choice ${results[index]} d-grid place-items-center">
                    <img src="./images/icon-${results[index]}.svg" alt="results[index]">
                </div>

            `;
        }, index * 1000);
    });

    gameDiv.classList.toggle("display-none");
    resultsDiv.classList.toggle("display-none");
}

function displayWinner(results) {
    setTimeout(() => {
        const verdict = determineWinner(results);

        if (verdict === "win") {
            resultText.innerText = "You win";
            resultDivs[0].classList.toggle("winner");
            updateScore(1);
        } else if (verdict === "loose") {
            resultText.innerText = "You loose";
            resultDivs[1].classList.toggle("winner");
            updateScore(-1);
        } else {
            resultText.innerText = "Draw";
        }

        resultWinner.classList.toggle("display-none");
        resultsDiv.classList.toggle("show-winner");
    }, 1000);
}

function determineWinner(results) {
    if (
        (results[0] === "rock" && results[1] === "scissors") ||
        (results[0] === "paper" && results[1] === "rock") ||
        (results[0] === "scissors" && results[1] === "paper")
    ) {
        return "win";
    } else if (
        (results[1] === "rock" && results[0] === "scissors") ||
        (results[1] === "paper" && results[0] === "rock") ||
        (results[1] === "scissors" && results[0] === "paper")
    ) {
        return "loose";
    } else {
        return "draw";
    }
}

function getScore() {
    return JSON.parse(localStorage.getItem("score")) || 0;
}

function setScore(score) {
    localStorage.setItem("score", JSON.stringify(score));
}

function updateScore(point) {
    score += point;
    setScore(score);
    scoreNumber.innerText = score;
}
