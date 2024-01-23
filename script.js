// Create getComputerChoice function
    // choose Rock/Paper/Scissors at random
    // return result in computerSelection

// Create playerSelection variable
    // prompt user input Rock/Paper/Scissors
    // store input in playerSelection
        // make sure result == Rock/Paper/Scissors, return error if wrong

// Create playRound function
    // if playerSelection loses to computerSelection return string "You Lose! x beats y"
    // if playerSelection wins to computerSelection return string "You Win! x beats y"
    // if TIE then replay the round


// Create game function
    // plays a best of 5 rounds that keeps score and reports overall winner or loser

function getComputerChoice(){
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return(choice[randomChoice]);
}

let playerInput = prompt("Rock, Paper, Scissors?");
let playerSelection = playerInput.toUpperCase();
    if (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS"){
        console.log("Sorry, not a valid choice, try again")
        
    }
    else {
        console.log(playerSelection);
    }

const computerSelection = getComputerChoice();
console.log("CPU got:",computerSelection);









