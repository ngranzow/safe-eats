//add const for search, diet, intolerances, cusine, rdm drink, 

const randomMeal = document.getElementById('Random Meal'),
diet = document.getElementById('Diet')
alergy = document.getElementById(' Food Intolerences')
submit = document.getElementById('submit'),
randomDrink = document.getElementById('Drink?'),
recipeEl = document.getElementById('Recipe'),
resultHeading = document.getElementById('result-heading');




//API fetch request

fetch('https://api.spoonacular.com/food/products/search?query&apiKey=4db28d341ddd49638dd20bb65bf0e98c')
.then(function(response){
return response.json();
})
fetch('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=drink') 
    .then(function(response){
  return response.json(); 
})

.then(function(comments){

  //console the comments with a four loop 
  for (var i = 0; i < comments.length; i++){
    console.log(comments[i]);
  }
})

// one function (all below)
// add button for query imput
// add cusine btn
//diet btn
//alergy btn

// add drink (random gererator)
//search btn 



//if else for random drink 
//call for random drink api 
if (randomDrink) {

} else {

}


// add previous meals to dom / local storage 
function addMealToDOM(meal) {
    const ingredients = [];
  
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
































//var sampleresponse = {
	//"type": "product",
	//"products": [
		//{
		//	"id": 210503,
		//	"title": "Apple &amp; Eve On The Go, Cranberry Juice Cocktail, 8oz (Pack of 24)",
		//	"image": "https://spoonacular.com/productImages/210503-312x231.jpeg",
		//	"imageType": "jpeg"
		//},
		//{
		//	"id": 171084,
			//"title": "Snapple Apple, 16 fl oz glass /bottles, 12 pack",
			//"image": "https://spoonacular.com/productImages/171084-312x231.jpeg",
		//	"imageType": "jpeg"
		//},
	//	{
		//	"id": 508455,
		//	"title": "Apple Rings, Natural (16 oz, Zin: 525010)",
		//	"image": "https://spoonacular.com/productImages/508455-312x231.jpeg",
		//	"imageType": "jpeg"
	//	},
		//{
		//	"id": 1583587,
		//	"title": "Snapple Apple 16 oz Glass Bottles - Pack of 12",
		//	"image": "https://spoonacular.com/productImages/1583587-312x231.jpeg",
		//	"imageType": "jpeg"
		//},
	//	{
		//	"id": 577167,
		//	"title": "Snapple Apple 16 oz Glass Bottles - Pack of 12",
		//	"image": "https://spoonacular.com/productImages/577167-312x231.jpeg",
		//	"imageType": "jpeg"
	//	},
		//{}
	//],
	//"offset": 0,
	//"number": 10,
	//"totalProducts": 19046,
	//"processingTimeMs": 58,
	//"expires": 1643943234220,
	//"isStale": false }