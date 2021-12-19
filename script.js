let playerPlay = "";
let roundsLeft = 5;
let playerPoints = 0;
let computerPoints = 0;
let roundWinner = '';

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors"
        default:
            return "Something went wrong"
    }
}

function playRound(playerSelection, computerSelection) {
    let lowerCasePlayer = playerSelection.toLowerCase();
    let lowerCaseComputer = computerSelection.toLowerCase();

    if (lowerCasePlayer == lowerCaseComputer) {
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
    if (!lowerCasePlayer) {
        return "Input something"
    }
    if (lowerCasePlayer) {
        return "Write without error"
    }
}

function game() {
    while (0 < roundsLeft) {
        playerPlay = prompt("Choose: rock, paper or scissors:")
        let msg = playRound(playerPlay, computerPlay());
        if (roundWinner == "PC") {
            console.log(msg);
            computerPoints++;
            roundsLeft--;
        } else if (roundWinner == "Player") {
            console.log(msg);
            playerPoints++;
            roundsLeft--;
        } else {
            console.log(msg);
        }
        console.log("Your points: " + playerPoints + " <----> PC points " + computerPoints)

        if (roundsLeft == 0) {
            if (playerPoints > computerPoints) {
                console.log("Yeah dude you won against machine good job!")
            } else {
                console.log("No worries its machine its hard to win against them..")
            }
        }
    }
}

game()