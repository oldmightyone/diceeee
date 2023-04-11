function rows() {
    var randomNumber1 = Math.ceil((Math.random() * 6));
    var randomNumber2 = Math.ceil((Math.random() * 6));

    var dices = document.querySelectorAll("img");

    dices[0].setAttribute("src", `images/dice${randomNumber1}.png`);
    dices[1].setAttribute("src", `images/dice${randomNumber2}.png`);

    var text = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
        text.innerHTML = "🚩 Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
        text.innerHTML = "Player 2 Wins!🚩";
    }
    else {
        text.innerHTML = "Draw!";
    }
}

