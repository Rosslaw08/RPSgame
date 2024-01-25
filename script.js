// Create getComputerChoice function - DONE
    // choose Rock/Paper/Scissors at random
    // return result in computerSelection

// Create getUserChoice function - DONE
    // Create playerSelection variable
    // prompt user input Rock/Paper/Scissors
    // store input in playerSelection
        // make sure result == Rock/Paper/Scissors, return error if wrong

// Create playRound function - DONE
    // if playerSelection loses to computerSelection return string "You Lose! x beats y"
    // if playerSelection wins to computerSelection return string "You Win! x beats y"
    // if TIE then replay the round

// Create game function - DONE
    // plays a best of 5 rounds that keeps score and reports overall winner or loser



function getComputerChoice(computerSelection){
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return(choice[randomChoice]);
}

function getUserChoice(playerSelection){
    let playerInput = prompt("Rock, Paper, Scissors?");
    playerSelection = playerInput.toUpperCase();
    if (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS"){
        console.log("Sorry, not a valid choice, try again")
        
    }
    else {
        console.log(playerSelection);
    }
    return playerSelection;
}

function playRound(playerSelection, computerSelection){

    playerSelection = getUserChoice();
    computerSelection = getComputerChoice();
    console.log("CPU got:", computerSelection);

    if (playerSelection == computerSelection) {
        console.log("TIE! Try again!");
        return playRound();
    }
    else if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        console.log("You Lose! Paper beats Rock!")
        return "LOSE"
    }
    else if(playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        console.log("You Win! Rock beats Scissors!")
        return "WIN"
    }
    else if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        console.log("You Win! Paper beats Rock!")
        return "WIN"
    }
    else if(playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        console.log("You Lose! Scissors beats Paper!")
        return "LOSE"
    }
    else if(playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        console.log("You Lose! Rock beats Scissors!")
        return "LOSE"
    }
    else if(playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        console.log("You Win! Scissors beats Paper!")
        return "WIN"
    }
}

function game(playerSelection, computerSelection, score){
    score = 0
    const roundOne = playRound();
    if (roundOne == "WIN"){
        score++;
    }
    else if (roundOne == "LOSE"){
        score--;
    }
    console.log("Round 1: ", roundOne);
    const roundTwo = playRound();
    if (roundTwo == "WIN"){
        score++;
    }
    else if (roundTwo == "LOSE"){
        score--;
    }
    console.log("Round 2: ", roundTwo);
    const roundThree = playRound();
    if (roundThree == "WIN"){
        score++;
    }
    else if (roundThree == "LOSE"){
        score--;
    }
    console.log("Round 3: ", roundThree);
    const roundFour = playRound();
    if (roundFour == "WIN"){
        score++;
    }
    else if (roundFour == "LOSE"){
        score--;
    }
    console.log("Round 4: ", roundFour);
    const roundFive = playRound();
    if (roundFive == "WIN"){
        score++;
    }
    else if (roundFive == "LOSE"){
        score--;
    }
    console.log("Round 5: ", roundFive);
    if (score < 0){
        return "BEST OF 5: LOSER";
    }
    else if (score > 0){
        return "BEST OF 5: WINNER";
    }
    else {
        return "BEST OF 5: TIE";
    }
}


const winner = game();
console.log(winner);


















