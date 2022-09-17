let user_score = 0;
let bot_score = 0;


/* playRound starts the game of rock, paper, scissors. */
function playRound(playerSelection, computerSelection){
    let player = getWinner(playerSelection);
    let robot = getWinner(computerSelection);
    if(player==robot){
        console.log("draw! nobody wins");
    }
    else if(player > robot){
        console.log("You win! " + playerSelection + " beats "
        + computerSelection);
        user_score++;
    }
    else{
        console.log("You lose! " + computerSelection + " beats "
        + playerSelection);
        bot_score++;
    }
}

/* getWinner will determine who wins the match */
function getWinner(type){
    if(type == "Rock".toUpperCase()){
        return 0;
    }
    else if(type == "Paper".toUpperCase()){
        return 1;
    }
    else{
        return 2;
    }
}

/* computer decides what to use */
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        return "Rock".toUpperCase();
    }
    else if (choice == 1){
        return "Paper".toUpperCase();
    }
    else{
        return "Scissors".toUpperCase();
    }

}
/* user inputs what to use */
function getUserChoice(){
    let choice = prompt("rock paper scissors? paper or plastic");
    return choice.toUpperCase();
}

/* game starts best of 5 */
function game(){
    window.alert("Hello. Welcome to Rock Paper Scissors." 
    + " Do you have what it takes to beat a bot? " 
    + "To see your output, press F12 and click on console tab." 
    + "Good luck!");
    for(let i = 0; i < 5; i++) {
        let user = getUserChoice();
        let computer = getComputerChoice();
        playRound(user, computer);
    }
    if(user_score == bot_score){
        console.log("game ended in draw");
    }
    else if(user_score > bot_score){
        console.log("player wins! you are good");
    }
    else{
        console.log("bot wins! you suck");
    }
}

game();