import { words } from "./words"
let history = []
let repeat = null
let word = ""
let score = 0
const DOMSelectors = {
  container: document.getElementById("con"),
  yesbtn: document.getElementById("yesButton"),
  nobtn: document.getElementById("noButton"),
  title: document.getElementById("title"),
  wordDisplay: document.getElementById('wordDisplay'),
  scoreboard: document.getElementById("scoreboard"),
  buttons: document.getElementById("buttons")
}
function startRound(){
	let randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex];
	DOMSelectors.wordDisplay.innerHTML = `${word}`
	if (history.includes(word)) {
		repeat = true
		return repeat
	}
	else {
		repeat = false 
		history.push(word)
		return repeat
	}
}
// function startRound(){
// 	getRandomWord();
// 	checkHistory();
// }
// function getRandomWord() {
//     let randomIndex = Math.floor(Math.random() * words.length);
//     word = words[randomIndex];
// 	DOMSelectors.wordDisplay.innerHTML = `${word}`
// 	return word
// }
// function checkHistory(){
// 	if (history.includes(word)) {
// 		repeat = true
// 		return repeat
// 	}
// 	else {
// 		repeat = false 
// 		history.push(word)
// 		return repeat
// 	}
// }
startRound();
DOMSelectors.yesbtn.addEventListener("click", function(){
	if (repeat === true){
		score ++;
		DOMSelectors.scoreboard.innerHTML = `score: ${score}`
		startRound();
	}
	else{
		DOMSelectors.wordDisplay.innerHTML = "you lose"
		DOMSelectors.buttons.remove();
	}
})

DOMSelectors.nobtn.addEventListener("click", function(){
	if (repeat === false){
		score ++;
		DOMSelectors.scoreboard.innerHTML = `score: ${score}`
		startRound();
	}
	else{
		DOMSelectors.wordDisplay.innerHTML =  "you lose"
		DOMSelectors.buttons.remove();
	}
})