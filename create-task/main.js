import { words } from "./words";
let repeat = null;
let word = "";
let score = 0;

const DOMSelectors = {
  container: document.getElementById("con"),
  yesbtn: document.getElementById("yesButton"),
  nobtn: document.getElementById("noButton"),
  title: document.getElementById("title"),
  wordDisplay: document.getElementById("wordDisplay"),
  scoreboard: document.getElementById("scoreboard"),
  buttons: document.getElementById("buttons"),
};

let history = [];
function startRound() {
  let randomIndex = Math.floor(Math.random() * words.length);
  word = words[randomIndex];
  DOMSelectors.wordDisplay.innerHTML = `${word}`;
  if (history.includes(word)) {
    history.push(word);
    repeat = true;
    return repeat;
  } else {
    repeat = false;
    history.push(word);
    return repeat;
  }
}
startRound();
DOMSelectors.yesbtn.addEventListener("click", function () {
  if (repeat === true) {
    score++;
    DOMSelectors.scoreboard.innerHTML = `score: ${score}`;
    startRound();
  } else {
    DOMSelectors.wordDisplay.innerHTML = "you lose";
    lose("yes");
  }
});

DOMSelectors.nobtn.addEventListener("click", function () {
  if (repeat === false) {
    score++;
    DOMSelectors.scoreboard.innerHTML = `score: ${score}`;
    startRound();
  } else {
    DOMSelectors.wordDisplay.innerHTML = "you lose";
    lose("no");
  }
});

function lose(strin) {
  DOMSelectors.buttons.remove();
  history.forEach((element) => {
    DOMSelectors.container.insertAdjacentHTML("afterend", `<p>${element}</p>`);
  });
  DOMSelectors.container.insertAdjacentHTML("afterend", `<h2>history:</h2>`);
  if(score >= 10){
    DOMSelectors.scoreboard.insertAdjacentHTML("afterend", `<p>oh wow! NICE<br>It was not ${strin} tho</p>`)
  } else if(score >= 30){
    DOMSelectors.scoreboard.insertAdjacentHTML("afterend", `<p>AMAZING!<br>It was not ${strin}tho</p>`)    
  } else {
    DOMSelectors.scoreboard.insertAdjacentHTML("afterend", `<p>better luck next time<br>It was not ${strin}</p>`) 
  }
}
