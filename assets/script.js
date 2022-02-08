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

const getRecipeTitleAndImage = async function (event) {
    event.preventDefault();
    removeAllChildNodes(recipeFoodListEl)
    const cuisine = getCuisine();
    const diet = getLifestyle();
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${cuisine}&diet=${diet}`
    const response = await fetch(url);
    const data = await response.json();
    makeCard(data, recipeFoodListEl)
}

function getCuisine () {
const foodItems = [];
const checkedItems = document.getElementsByClassName("cusine");
for (let i = 0; i < checkedItems.length; i++){
    if (checkedItems[i].checked === true) {
        foodItems.push(checkedItems[i].value);
    }
}
const foodChoice = foodItems.join(",");
return foodChoice;

}

function getAlergy () {
    let lifeStyleItems = [];
    let checkedItems = document.getElementsByClassName("Food Intolerances");
    for (let i = 0; i < checkedItems.length; i++) {
        if (checkedItems[i].checked === true) {
            lifeStyleItems.push(checkedItems[i].value);
        }
    }
    const lifeStyle = lifeStyleItems.join(",");
    return lifeStyle;
}




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



// local storage 

function saveFunc(index) {
    btnBox.click(function() {

      var task = $(".description-" + index).val(); //get the value of the textarea

      if(index === 1){
      console.log(task);        
      localStorage.setItem("task1", task)

      } else if (index === 2) {
        console.log(task);
        localStorage.setItem("task2", task)        
      }  else if (index === 3) {
        localStorage.setItem("task3", task)
      }  else if (index === 4) {
        localStorage.setItem("task4", task)
      }  else if (index === 5) {
        localStorage.setItem("task5", task)
      }  else if (index === 6) {
        localStorage.setItem("task6", task)
      }  else if (index === 7) {
        localStorage.setItem("task7", task)
      }  else if (index === 8) {
        localStorage.setItem("task8", task)
      }  else if (index === 9) {
        localStorage.setItem("task9", task)
      } 

    });
  }
  saveFunc(i);
})

// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}