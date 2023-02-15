let maxcooktime = null
const DOMSelectors = {
  container: document.getElementById("con"),
  userinputform: document.getElementById("userinputs"),
  recipes: document.getElementById("recipes"),
  maxcooktime: document.getElementById("maxcooktime")
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad555dce74mshb1522482a48114dp1f8cddjsnff68c51d250d',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};
DOMSelectors.userinputform.addEventListener(`submit`,function(e){
	e.preventDefault();
	maxcooktime = DOMSelectors.maxcooktime.value
	let url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=listAPI`
	console.log(maxcooktime)
	fetch(url, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
})
