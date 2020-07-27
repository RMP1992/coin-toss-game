const message = document.querySelector(".message");
const message2 = document.querySelector(".message2");
const buttons = document.querySelectorAll("button");
const coinArray = ["Heads", "Tails"]
let score = [0, 0]

const tossCoin = (e) => {
    // console.log("player:" + e.target.innerText);
    let computerToss = Math.floor(Math.random()* 2);
    let playerGuess = e.target.innerText;
    let computerGuess = coinArray[computerToss]
    message2.innerHTML = "Computer Selected: " + computerGuess + "<br>"
    let output;
    // console.log("computer:" + coinArray[computerToss])

    if(playerGuess === computerGuess) {
        output = "Player wins"
        score[0]++;
    } else {
        output = "Computer wins"
        score[1]++;
    }
    
    message.innerHTML = output + "<br> Player " + score[0] + " Computer " + score[1]

}

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', tossCoin )
}