
function randoMeal() {
    var searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", function () {

        var mealApi = 'www.themealdb.com/api/json/v1/1/random.php';
        fetch(mealApi)
        .then(function (mealResponse){
            return mealResponse.json();
        })
        .then(function (mealData){
            var recipesEl = document.getElementById("recipes");
            //image
            var mealImage = mealData.meals[0].strMealThumb + "/preview";
            //title
            var mealName = mealData.meals[0].strMeal;
            //recipe
            var mealInstructions = mealData.meals[0].strInstructions;

            var mealIngredientArray = [mealData.meals[0].strIngredient1, mealData.meals[0].strIngredient2, mealData.meals[0].strIngredient3, mealData.meals[0].strIngredient4, mealData.meals[0].strIngredient5, mealData.meals[0].strIngredient6, mealData.meals[0].strIngredient7, mealData.meals[0].strIngredient8, mealData.meals[0].strIngredient9, mealData.meals[0].strIngredient10, mealData.meals[0].strIngredient11, mealData.meals[0].strIngredient12, mealData.meals[0].strIngredient13, mealData.meals[0].strIngredient14, mealData.meals[0].strIngredient15, mealData.meals[0].strIngredient16, mealData.meals[0].strIngredient17, mealData.meals[0].strIngredient18, mealData.meals[0].strIngredient19, mealData.meals[0].strIngredient20];
            
            var mealMeasureArray = [mealData.meals[0].strMeasure1, mealData.meals[0].strMeasure2, mealData.meals[0].strMeasure3, mealData.meals[0].strMeasure4, mealData.meals[0].strMeasure5, mealData.meals[0].strMeasure6, mealData.meals[0].strMeasure7, mealData.meals[0].strMeasure8, mealData.meals[0].strMeasure9, mealData.meals[0].strMeasure10, mealData.meals[0].strMeasure11, mealData.meals[0].strMeasure12, mealData.meals[0].strMeasure13, mealData.meals[0].strMeasure14, mealData.meals[0].strMeasure15, mealData.meals[0].strMeasure16, mealData.meals[0].strMeasure17, mealData.meals[0].strMeasure18, mealData.meals[0].strMeasure19, mealData.meals[0].strMeasure20];
            var noNullIngredients = mealIngredientArray.filter(x => x !== null);
            var returnIngredients = noNullIngredients.join(", ");
            console.log(noNullIngredients);
            console.log(returnIngredients);
            var noNullMeasure = mealMeasureArray.filter(x => x !== null);
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

    });
}

randoMeal();