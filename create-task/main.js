const DOMSelectors = {
  container: document.getElementById("con"),
  userinputform: document.getElementById("userinputs"),
  recipes: document.getElementById("recipes")
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad555dce74mshb1522482a48114dp1f8cddjsnff68c51d250d',
		'X-RapidAPI-Host': 'kfc-chickens.p.rapidapi.com'
	}
};

fetch('https://kfc-chickens.p.rapidapi.com/chickens/2', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));