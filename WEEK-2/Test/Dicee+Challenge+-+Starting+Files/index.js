

let randomNUmber1 = Math.floor(Math.random() * 6) + 1;
let randomNUmber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", `./images/dice${randomNUmber1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNUmber2}.png`);

if ( randomNUmber1 > randomNUmber2 ) {
    document.querySelector('h1').innerHTML = "Player 1 Wins!";
} else if ( randomNUmber2 > randomNUmber1 ) {
    document.querySelector('h1').innerHTML = "Player 2 Wins!";
} else {
    document.querySelector('h1').innerHTML = "Draw!";
}

