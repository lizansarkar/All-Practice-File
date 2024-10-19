// ************************ All Functionality Here ************************//
let userBtn = document.querySelector("#mybtn");
let msg = document.querySelector("#msg");
let winMsg = document.querySelector("#final-msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

let userScoreCount = 0;
let compScoreCount = 0;

let playGame = () => {
    userBtn.addEventListener("click", () => {
        let userNumber = Math.floor(Math.random() * 100);
        console.log("User Number Is =", userNumber);

        let compNumber = Math.floor(Math.random() * 100);
        console.log("Computer Number Is =", compNumber);

        if(userNumber === compNumber) {
            drawGame();
        }else {
            if(userNumber > compNumber) {
                console.log("User Win In Lucky Number");
                msg.innerText = `User Number Is (${userNumber}) Computer Number Is (${compNumber}).`;
                winMsg.innerText = "User Win In Lucky Number";
                userScoreCount++;
                userScore.innerText = userScoreCount;
            }else {
                console.log("Computer Win In Lucky Number");
                msg.innerText = `Computer Number Is (${compNumber}) User Number Is (${userNumber}).`;
                winMsg.innerText = "Computer Win In Lucky Number";
                compScoreCount++;
                compScore.innerText = compScoreCount;
            }
        }
    });
};

let drawGame = () => {
    console.log("game is draw");
};

playGame();


























// playGame(userNumber, compNumber)
// let playGame = (userNumber, compNumber) => {
//     console.log(`Random user number ${userNumber} Random computer number ${compNumber}`);
// };















