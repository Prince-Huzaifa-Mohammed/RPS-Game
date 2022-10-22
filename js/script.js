const rules = document.querySelector(".rules-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

const choiceBtns = document.querySelectorAll(".choice-btn");
const gameDiv = document.querySelector(".game");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll(".results__result");

const resultWinner = document.querySelector(".results__winner");
const resultText = document.querySelector(".results__text");

const playAgainButton = document.querySelector(".play-again");

const choices = ["rock", "paper", "scissors"];

rules.addEventListener("click", (e) => {
    modal.classList.toggle("hide");
});

closeBtn.addEventListener("click", (e) => {
    modal.classList.toggle("hide");
});

// GAME LOGIC
choiceBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        const choiceName = button.dataset.choice;
        choose(choiceName);
    });
});

// PLAY AGAIN
playAgainButton.addEventListener("click", (e) => {
    gameDiv.classList.toggle("display-none");
    resultsDiv.classList.toggle("display-none");
    resultDivs.forEach((resultDiv) => {
        resultDiv.innerHTML = "";
        resultDiv.classList.remove("winner");
    });

    resultText.innerText = "";
    resultWinner.classList.toggle("display-none");
    resultsDiv.classList.toggle("show-winner");
});

// function getComputerChoice() {
//     const randomNumber = Math.floor(Math.random() * choices.length);
//     return choices[randomNumber];
// }

// function choose(choice) {
//     const computerChoice = getComputerChoice();
//     displayResults([choice, computerChoice]);
// }

// function displayResults(results) {
//     resultDivs.forEach((resultDiv, index) => {
//         setTimeout(() => {
//             resultDiv.innerHTML = `
//                 <div class="choice ${results[index]} d-grid place-items-center">
//                     <img src="./images/icon-${results[index]}.svg" alt="results[index]">
//                 </div>

//             `;
//         }, index * 1000);
//     });
// }
