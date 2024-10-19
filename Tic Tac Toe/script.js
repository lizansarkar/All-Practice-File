let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".win-msg");
let msg = document.querySelector("#msg");

const winPatterns = [         //game winning paterns ***********
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let turnO = true;              //turn O or X condition **********

boxes.forEach((box) => {       //Clicking on O and X is done **********
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
            box.classList.add("colorO");
        }else{
            box.innerText = "X";
            turnO = true;
            box.classList.add("colorX");
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => { //Box disabled *************
    for(let box of boxes) {
        box.disabled = true;
    };
};

const enableBoxes = () => { //Box Enabled **************
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");
    };
};

const showWinner = (winner) => { // Winner showing *************
    msg.innerText = `Congratulation ${winner} is win this game.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {     // Check winner function ***************
    for(pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val && pos3Val) {
                showWinner(pos1Val);
            }
        }
    };
};

//************ Add Reset Game Functionality **************/

const resetGame = () => {
    turnO = true;
    enableBoxes();
};

newGameBtn.addEventListener("click", () => {
    resetGame();
});

reset.addEventListener("click", () => {
    resetGame();
});













