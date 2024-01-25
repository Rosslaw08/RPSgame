// Create getComputerChoice function - DONE
    // choose Rock/Paper/Scissors at random
    // return result in computerSelection

// Create getUserChoice function - DONE
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

function getUserChoice(){
    let playerInput = prompt("Rock, Paper, Scissors?");
    let playerSelection = playerInput.toUpperCase();
    if (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS"){
        console.log("Sorry, not a valid choice, try again")
        
    }
    else {
        console.log(playerSelection);
    }
    return playerSelection;
}

const playerSelection = getUserChoice();

const computerSelection = getComputerChoice();
console.log("CPU got:",computerSelection);

function playRound(){
    if (playerSelection == computerSelection) {
        console.log("TIE! Try again!");
    }
    else if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        console.log("You Lose! Paper beats Rock!")
    }
    else if(playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        console.log("You Win! Rock beats Scissors!")
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        console.log("You Win! Paper beats Rock!")
    }
    else if(playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        console.log("You Lose! Scissors beats Paper!")
    }
    else if(playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        console.log("You Lose! Rock beats Scissors!")
    }
    else if(playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        console.log("You Win! Scissors beats Paper!")
    }

}

const winner = playRound();












