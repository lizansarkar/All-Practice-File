// *********************** all js code here **********************
let imgChange = document.querySelector("#btn");
let img = document.querySelector("#random");

const roolDice = () => {
    let randNum = Math.floor(Math.random() * 9 + 1);
    let imgSource = "img" + randNum + ".png.webp";
    document.getElementById("random").src = imgSource;
};

imgChange.addEventListener("click", () => {
    roolDice();
});























