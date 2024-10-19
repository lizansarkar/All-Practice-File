// ************************ All Functionality Here ************************
let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

let userScoreCount = 0;
let compScoreCount = 0;

//User choice ************
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

//genarate computer choice ************
const genComChoice = () => {
    const option = ["rock","paper","scissors"];
    const ranIndx = Math.floor(Math.random() * 3);
    return option[ranIndx];
};

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    //create computer choice ************
    const comChoice = genComChoice();
    console.log("Computer choice = ", comChoice);
    //user or computer winning condition **********
    if(userChoice === comChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //rock condition ******
            userWin = comChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            //paper condition ******
            userWin = comChoice === "scissors" ? false : true;
        } else {
            //scissors condition ******
            userWin = comChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, comChoice);
    };
};

//win and show codition ****************
//draw condition *************
const drawGame = () => {
    console.log("game is draw");
    msg.innerText = "Game Is Draw. Play Again.";
    msg.style.backgroundColor = "#081b31";
};

//winner showing condition ***************
const showWinner = (userWin, userChoice, comChoice) => {
    if(userWin) {
        console.log("You Win.")
        msg.innerText = `You Win.Yours ${userChoice} bets computer ${comChoice}`;
        msg.style.backgroundColor = "green";
        userScoreCount++;
        userScore.innerText = userScoreCount;
    } else {
        console.log("You Lose.")
        msg.innerText = `You Lose.Computer ${comChoice} bets your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScoreCount++;
        compScore.innerText = compScoreCount;
    };
};










