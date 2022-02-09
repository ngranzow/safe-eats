//add const for search, diet, intolerances, cusine, rdm drink, 

//const randomMeal = document.getElementById('Random Meal'),
//diet = document.getElementById('Diet'),
//alergy = document.getElementById(' Food Intolerences'),
//submit = document.getElementById('submit'),
//randomDrink = document.getElementById('Drink?'),
//recipeEl = document.getElementById('Recipe'),
//esultHeading = document.getElementById('result-heading');

//API fetch request
fetch('https://api.spoonacular.com/food/products/search?query&apiKey=4db28d341ddd49638dd20bb65bf0e98c')
.then(function(response){
return response.json();
})
fetch('http://www.thecocktaildb.com/api/json/v1/1/search.php') 
    .then(function(response){
  return response.json(); 
})

.then(function(comments){


  //console the comments with a four loop 
  for (var i = 0; i < comments.length; i++){
    console.log(comments[i]);
  }}


const getRecipeTitleAndImage = async (event) => {
  event.preventDefault();
  removeAllChildNodes(recipeFoodListEl);
  const cuisine = getCuisine();
  const diet = getLifestyle();
  const url = 'https://api.spoonacular.com/food/products/search?query&apiKey=4db28d341ddd49638dd20bb65bf0e98c';
  const response = await fetch(url);
  const data = await response.json();
  makeCard(data, recipeFoodListEl);
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

async function getIngredient (id) {
  const ingredientArray = [];
  const response = await fetch(`https://api.spoonacular.com/food/products/search?query&apiKey=4db28d341ddd49638dd20bb65bf0e98c`);
  const data = await response.json();
  console.log(data)
  for (let i = 0; i < data.ingredients.length; i++){
      const ingredientName = await data.ingredients[i].name;
      const measurement = await data.ingredients[i].amount.us.value + " " + data.ingredients[1].amount.us.unit;
      const ingredientMeasurement = await ingredientName + ": " + measurement;
      ingredientArray.push(ingredientMeasurement);
  }
  return ingredientArray;
}
//make a card for recipe
async function makeCard (data, _attachingEl) {
  for (let i = 0; i < data.results.length; i++){
  }
  }

     // Create article element
     const articleEl = document.createElement("article");
     articleEl.className = "message";
     // Create header Element, Content, and Append
     const headerEl = document.createElement("div"); 
     headerEl.classList.add("message-header", "has-background-black");
     const recipeName = document.createElement("p");
     recipeName.textContent = data.results[i].title;
     headerEl.appendChild(recipeName);
     articleEl.appendChild(headerEl);
     // Create body Element, Content, and Append
         // Create and display image
     const messageBodyEl = document.createElement("div");
     messageBodyEl.className = "message-body";
     const imageEl = document.createElement("div");
     imageEl.className = "level-item";
     const image = document.createElement("img");
     image.setAttribute("src", data.results[i].image);
     imageEl.appendChild(image);
     messageBodyEl.appendChild(imageEl);
     articleEl.appendChild(messageBodyEl);
         // Create and display ingredients
     const ingredientsEl = document.createElement("div");
     const ingredientTitle = document.createElement("h2");
     ingredientTitle.classList.add("is-size-5", "is-underlined", "level-item", "mt-4", "mb-2");
     ingredientTitle.textContent = "Ingredients";
     ingredientsEl.appendChild(ingredientTitle);
     const recipeId = data.results[i].id

     const ingredients = await getIngredient(recipeId);
     console.log(ingredients.length);
     for (let i = 0; i < ingredients.length; i ++) {
         const ingredient = document.createElement("p");
         ingredient.className = "level-item";
         ingredient.textContent = ingredients[i]
         ingredientsEl.append(ingredient);
     }
     messageBodyEl.appendChild(ingredientsEl);
         
     
// add previous meals to dom / local storage 
function addMealToDOM(meal) {
    const ingredients = [];
  
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
        }


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
}

// Get the modal
      newFunction();
  function newFunction() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function () {
      modal.style.display = "block";
    };
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

    }

    function randomDrink() {
      var searchBtn = document.getElementById("search-btn");
      searchBtn.addEventListener("click", function() {
          var yesRadio = document.getElementById("yes").checked;
  
          if (yesRadio) {
              var drinkApi = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
              fetch(drinkApi)
              .then(function (drinkResponse) {
                  return drinkResponse.json();
              })
              .then(function (drinkData) {
                  var recipesEl = document.getElementById("recipes");
                  var drinkImage = drinkData.drinks[0].strDrinkThumb + "/preview";
                  var drinkName = drinkData.drinks[0].strDrink;
                  var drinkInstructions = drinkData.drinks[0].strInstructions;
                  var drinkIngredientArray = [drinkData.drinks[0].strIngredient1, drinkData.drinks[0].strIngredient2, drinkData.drinks[0].strIngredient3, drinkData.drinks[0].strIngredient4, drinkData.drinks[0].strIngredient5, drinkData.drinks[0].strIngredient6, drinkData.drinks[0].strIngredient7, drinkData.drinks[0].strIngredient8, drinkData.drinks[0].strIngredient9, drinkData.drinks[0].strIngredient10, drinkData.drinks[0].strIngredient11, drinkData.drinks[0].strIngredient12, drinkData.drinks[0].strIngredient13, drinkData.drinks[0].strIngredient14, drinkData.drinks[0].strIngredient15];
                  var drinkMeasureArray = [drinkData.drinks[0].strMeasure1, drinkData.drinks[0].strMeasure2, drinkData.drinks[0].strMeasure3, drinkData.drinks[0].strMeasure4, drinkData.drinks[0].strMeasure5, drinkData.drinks[0].strMeasure6, drinkData.drinks[0].strMeasure7, drinkData.drinks[0].strMeasure8, drinkData.drinks[0].strMeasure9, drinkData.drinks[0].strMeasure10, drinkData.drinks[0].strMeasure11, drinkData.drinks[0].strMeasure12, drinkData.drinks[0].strMeasure13, drinkData.drinks[0].strMeasure14, drinkData.drinks[0].strMeasure15];
                  var noNullIngredients = drinkIngredientArray.filter(x => x !== null);
                  var returnIngredients = noNullIngredients.join(", ");
                  console.log(noNullIngredients);
                  console.log(returnIngredients);
                  var noNullMeasure = drinkMeasureArray.filter(x => x !== null);
                  var returnMeasure = noNullMeasure.join(", ")
                  console.log(returnMeasure);
  
                  recipesEl.innerHTML = ("<div class='card'<div class='card-content'><div class='media'><div class='media-left'><figure class'image is-32x32'><img src='" + drinkImage + "' alt='" + drinkName + "'></figure></div><div class='media-content'><div class='content'><p><h4>" + drinkName + "</h4><br><strong>Ingredients:</strong><table id='ingredient-table'></table></p><p><strong>Directions:</strong> " + drinkInstructions + "</p><button id='myBtn' class='button'>View Recipe</button></div></div></div></div></div>");
  
                  var maxSize = Math.max(noNullIngredients.length, noNullMeasure.length);
                  var arrays = [];
                  for (var i = 0; i < maxSize; i++) {
                      arrays[i] = [
                          noNullIngredients[i] || "",
                          noNullMeasure[i] || ""
                      ];
                  }
  
                  var columns = arrays.map(p => {
                      var row = $("<tr>");
                      p.forEach(v => row.append($("<td>").html(v)));
                      return row;
                  })
  
                  $("#ingredient-table").append(columns);
              })
          }
      });
  }
  

