// create a variable that picks a number between 1 - 6

const randomNum = Math.floor(Math.random() * 6) + 1;
const randomNum2 = Math.floor(Math.random() * 6) + 1;


// look at image names think how you could pick and store random image name and use it wink wink
// get the image and pass the variable above as the source

if (randomNum === 1) {
    document.querySelector(".img1").src = "/images/dice1.png";
} else if (randomNum === 2) {
    document.querySelector(".img1").src = "/images/dice2.png";
} else if (randomNum === 3) {
    document.querySelector(".img1").src = "/images/dice3.png";
} else if (randomNum === 4) {
    document.querySelector(".img1").src = "/images/dice4.png";
} else if (randomNum === 5) {
    document.querySelector(".img1").src = "/images/dice5.png";
} else {
    document.querySelector(".img1").src = "/images/dice6.png";
}


// same for player too basically

if (randomNum2 === 1) {
    document.querySelector(".img2").src = "/images/dice1.png";
} else if (randomNum2 === 2) {
    document.querySelector(".img2").src = "/images/dice2.png";
} else if (randomNum2 === 3) {
    document.querySelector(".img2").src = "/images/dice3.png";
} else if (randomNum2 === 4) {
    document.querySelector(".img2").src = "/images/dice4.png";
} else if (randomNum2 === 5) {
    document.querySelector(".img2").src = "/images/dice5.png";
} else {
    document.querySelector(".img2").src = "/images/dice6.png";
}

// condition to check who won
const players = document.querySelectorAll("p");

if (randomNum > randomNum2) {
    players[0].innerHTML = "Player 1 wins 🎉";
    players[0].style.fontWeight = "800"

} else if (randomNum == randomNum2) {
    players[0].innerHTML = "Draw 😐";
    players[1].innerHTML = "Draw 😐";

} else {
    players[1].innerHTML = "Player 2 wins 🎉";
    players[1].style.fontWeight = "800"
}

// extra: button to refresh the page

const resetButton = document.querySelector("h1");
resetButton.style.cursor = "pointer"
resetButton.addEventListener("click", reset = () => {
    window.location.reload();
})