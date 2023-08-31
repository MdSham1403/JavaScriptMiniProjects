const prompt = require("prompt-sync")();

let wins = 0;
let draw = 0;
let losses = 0;


while(true)
{
        const playerChoice = prompt("Enter ur choice rock,paper or scissor or press q to Quit : ");
    if (playerChoice.toLowerCase() === "q"){
        console.log("Status : Exit")
        break;
    }

    if (
        playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissor"
        )
        {
            console.log("Pls enter a valid key");
            continue;
        }


    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.round(Math.random() * 2);
    const computerChoice = choices[randomIndex];

    console.log("Computer's Choice ",computerChoice);

        if(computerChoice === playerChoice){
            console.log("It was a Draw");
            draw++;
        }
        else if ((playerChoice === "paper" && computerChoice === "rock") ||  (playerChoice === "rock" && computerChoice === "scisscors") ||
        (playerChoice === "scisscors" && computerChoice === "paper")){
            console.log("You win");
            wins++;
        }
        else {
            console.log("You lose");
            losses++;
        }
}

console.log("Wins : ",wins,"Loss :", losses,"Tie",draw)
 
