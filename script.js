let playerPlay = '';
let playerPoints = 0;
let computerPoints = 0;
let roundWinner = '';

let rockBtn = document.querySelector('#rockBtn');
let scissorsBtn = document.querySelector('#scissorsBtn');
let paperBtn = document.querySelector('#paperBtn');
let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
let selection = document.querySelector('.selection');
let winner = document.querySelector('.winner');

rockBtn.addEventListener('click', () => game('rock'))
scissorsBtn.addEventListener('click', () => game('scissors'))
paperBtn.addEventListener('click', () => game('paper'))

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
        default:
            return "Something went wrong"
    }
}

function playRound(playerSelection, computerSelection) {
    let lowerCasePlayer = playerSelection.toLowerCase();
    let lowerCaseComputer = computerSelection.toLowerCase();

    if (lowerCasePlayer == lowerCaseComputer) {
        roundWinner = "Tie"
        return "Tie you both selected: " + playerSelection;
    }
    if (lowerCasePlayer == "rock") {
        if (lowerCaseComputer == "paper") {
            roundWinner = "PC"
            return "Computer won you selected: " + playerSelection + " and computer selected " + computerSelection;
        } else if (lowerCaseComputer == "scissors") {
            roundWinner = "Player"
            return "You won you selected: " + playerSelection + " and computer selected " + computerSelection;
        }
    }
    if (lowerCasePlayer == "paper") {
        if (lowerCaseComputer == "scissors") {
            roundWinner = "PC"
            return "Computer won you selected: " + playerSelection + " and computer selected " + computerSelection
        } else if (lowerCaseComputer == "rock") {
            roundWinner = "Player"
            return "You won you selected: " + playerSelection + " and computer selected " + computerSelection
        }
    }
    if (lowerCasePlayer == "scissors") {
        if (lowerCaseComputer == "rock") {
            roundWinner = "PC"
            return "Computer won you selected: " + playerSelection + " and computer selected " + computerSelection
        } else if (lowerCaseComputer == "paper") {
            roundWinner = "Player"
            return "You won you selected: " + playerSelection + " and computer selected " + computerSelection
        }
    }
}

function game(playerSelection) {
    let msg = playRound(playerSelection, computerPlay());
    selection.innerHTML = msg;
    if (roundWinner == "PC") {
        computerPoints++;
        computerScore.innerHTML = computerPoints;
    }
    if (roundWinner == "Player") {
        playerPoints++;
        playerScore.innerHTML = playerPoints;
    }

    if (computerPoints === 5) {
        window.alert("Sadly but 'AI' won against you, don't worry it is a machine...");
        newGame();
    }
    if (playerPoints === 5) {
        window.alert("You won against machine! Damn boi");
        newGame();
    }

    function newGame() {
        playerPoints = 0;
        computerPoints = 0;
        computerScore.innerHTML = computerPoints;
        playerScore.innerHTML = playerPoints;
        selection.innerHTML = '';
    }

    // if (roundsLeft == 0) {
    //     if (playerPoints > computerPoints) {
    //         console.log("Yeah dude you won against machine good job!")
    //     } else {
    //         console.log("No worries its machine its hard to win against them..")
    //     }
    // }
}