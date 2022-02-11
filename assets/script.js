function allRecipes() {
  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", function () {
      const yesRadio = document.getElementById("yes").checked;
      const textInput = document.getElementById("search").value;
      const textInUS = textInput.replaceAll(" ", "_");
      const mealTypeDrop = document.getElementById("meal_type").value;
      const cuisineDrop = document.getElementById("cuisine").value;
      const dietDrop = document.getElementById("diet").value;
      const intolerancesCheck = new Array();

      $("input[type='checkbox']:checked").each(function () {
          intolerancesCheck.push($(this).val());
      })

      const intChkStr = intolerancesCheck.join(",");


      console.log(yesRadio, textInput, mealTypeDrop, cuisineDrop, dietDrop, intChkStr);

      fetch(`https://api.spoonacular.com/recipes/search?query=${textInUS}&type=${mealTypeDrop}&cuisine=${cuisineDrop}&diet=${dietDrop}&intolerances=${intChkStr}&apiKey=4db28d341ddd49638dd20bb65bf0e98c`)
          .then(function (foodResponse) {
              return foodResponse.json();
          })
          .then(function (foodData) {
              console.log(foodData);
              console.log(foodData.results.length);
              for (var i = 0; i < foodData.results.length; i++) {
                  const recipesEl = document.getElementById("recipes");
                  var recipesContent = document.createElement("div")
                  const foodImage = foodData.results[i].image;
                  const foodTitle = foodData.results[i].title;
                  const foodTime = foodData.results[i].readyInMinutes;
                  const foodLink = foodData.results[i].sourceUrl;

                  console.log(foodImage, foodTitle, foodTime, foodLink)

                  recipesContent.innerHTML = ("<div class='card'><div class='card-content'><div class='media'><div class='media-left'><figure class='image'><img class='food-image' src='https://spoonacular.com/recipeImages/" + foodImage + "' alt='" + foodTitle + "'></figure></div><div class='media-content'><div class='content'><p><h4>" + foodTitle + "</h4><p><strong>Approximate time:</strong> " + foodTime + "</p><button id='myBtn' class='button'>View Recipe</button></div></div></div></div>");

                  recipesEl.appendChild(recipesContent);

                  function foodModal() {
                      const modalBtn = document.getElementById("myBtn");
                      modalBtn.addEventListener("click", function () {
                          const modalContent = document.getElementById("modal-content");
                          document.getElementById("myModal").style.display = "inline";
                          modalContent.innerHTML = ("<div class='card'><div class='card-content'></div></div>")

                          const closeModalBtn = document.querySelector(".close");
                          closeModalBtn.addEventListener("click", function () {
                              modalContent.innerHTML = "";
                              document.getElementById("myModal").style.display = "none";
                          })
                      })
                  }
                foodModal();
              }

          })

      if (yesRadio) {
        const drinkApi = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
        fetch(drinkApi)
          .then(function (drinkResponse) {
            return drinkResponse.json();
          })
          .then(function (drinkData) {
            const drinkRecipesEl = document.getElementById("drinkRecipe");
            const drinkImage = drinkData.drinks[0].strDrinkThumb + "/preview";
            const drinkName = drinkData.drinks[0].strDrink;
            // var drinkInstructions = drinkData.drinks[0].strInstructions;
            const drinkIngredientArray = [drinkData.drinks[0].strIngredient1, drinkData.drinks[0].strIngredient2, drinkData.drinks[0].strIngredient3, drinkData.drinks[0].strIngredient4, drinkData.drinks[0].strIngredient5, drinkData.drinks[0].strIngredient6, drinkData.drinks[0].strIngredient7, drinkData.drinks[0].strIngredient8, drinkData.drinks[0].strIngredient9, drinkData.drinks[0].strIngredient10, drinkData.drinks[0].strIngredient11, drinkData.drinks[0].strIngredient12, drinkData.drinks[0].strIngredient13, drinkData.drinks[0].strIngredient14, drinkData.drinks[0].strIngredient15];
            const drinkMeasureArray = [drinkData.drinks[0].strMeasure1, drinkData.drinks[0].strMeasure2, drinkData.drinks[0].strMeasure3, drinkData.drinks[0].strMeasure4, drinkData.drinks[0].strMeasure5, drinkData.drinks[0].strMeasure6, drinkData.drinks[0].strMeasure7, drinkData.drinks[0].strMeasure8, drinkData.drinks[0].strMeasure9, drinkData.drinks[0].strMeasure10, drinkData.drinks[0].strMeasure11, drinkData.drinks[0].strMeasure12, drinkData.drinks[0].strMeasure13, drinkData.drinks[0].strMeasure14, drinkData.drinks[0].strMeasure15];
            const noNullIngredients = drinkIngredientArray.filter(x => x !== null);
            const returnIngredients = noNullIngredients.join(", ");
            console.log(noNullIngredients);
            console.log(returnIngredients);
            const noNullMeasure = drinkMeasureArray.filter(x => x !== null);
            const returnMeasure = noNullMeasure.join(", ")
            console.log(returnMeasure);
  
            drinkRecipesEl.innerHTML = ("<div class='card'><div class='card-content'><div class='media'><div class='media-left'><figure class'image is-32x32'><img src='" + drinkImage + "' alt='" + drinkName + "'></figure></div><div class='media-content'><div class='content'><p><h4>" + drinkName + "</h4><button id='myBtn' class='button'>View Recipe</button></div></div></div></div>");
  
            function drinkModal() {
              const modalBtn = document.getElementById("myBtn");
              modalBtn.addEventListener("click", function () {
                console.log("click");
                const drinkImage = drinkData.drinks[0].strDrinkThumb + "/preview";
                const drinkName = drinkData.drinks[0].strDrink;
                const drinkInstructions = drinkData.drinks[0].strInstructions;
                const drinkIngredientArray = [drinkData.drinks[0].strIngredient1, drinkData.drinks[0].strIngredient2, drinkData.drinks[0].strIngredient3, drinkData.drinks[0].strIngredient4, drinkData.drinks[0].strIngredient5, drinkData.drinks[0].strIngredient6, drinkData.drinks[0].strIngredient7, drinkData.drinks[0].strIngredient8, drinkData.drinks[0].strIngredient9, drinkData.drinks[0].strIngredient10, drinkData.drinks[0].strIngredient11, drinkData.drinks[0].strIngredient12, drinkData.drinks[0].strIngredient13, drinkData.drinks[0].strIngredient14, drinkData.drinks[0].strIngredient15];
                const drinkMeasureArray = [drinkData.drinks[0].strMeasure1, drinkData.drinks[0].strMeasure2, drinkData.drinks[0].strMeasure3, drinkData.drinks[0].strMeasure4, drinkData.drinks[0].strMeasure5, drinkData.drinks[0].strMeasure6, drinkData.drinks[0].strMeasure7, drinkData.drinks[0].strMeasure8, drinkData.drinks[0].strMeasure9, drinkData.drinks[0].strMeasure10, drinkData.drinks[0].strMeasure11, drinkData.drinks[0].strMeasure12, drinkData.drinks[0].strMeasure13, drinkData.drinks[0].strMeasure14, drinkData.drinks[0].strMeasure15];
                const noNullIngredients = drinkIngredientArray.filter(x => x !== null);
                const returnIngredients = noNullIngredients.join(", ");
                console.log(noNullIngredients);
                console.log(returnIngredients);
                const noNullMeasure = drinkMeasureArray.filter(x => x !== null);
                const returnMeasure = noNullMeasure.join(", ")
                console.log(returnMeasure);
                const modalContent = document.getElementById("modal-content");
                document.getElementById("myModal").style.display = "inline";
                modalContent.innerHTML = ("<div class='card'><div class='card-content'><div class='media'><div class='media-left'><figure class'image is-32x32'><img src='" + drinkImage + "' alt='" + drinkName + "'></figure></div><div class='media-content'><div class='content'><p><h4>" + drinkName + "</h4><br><strong>Ingredients:</strong><table id='ingredient-table'></table></p><p><strong>Directions:</strong> " + drinkInstructions + "</p></div></div></div></div></div>");
  
                const maxSize = Math.max(noNullIngredients.length, noNullMeasure.length);
                const arrays = [];
                for (var i = 0; i < maxSize; i++) {
                  arrays[i] = [
                    noNullIngredients[i] || "",
                    noNullMeasure[i] || ""
                  ];
                }
  
                const columns = arrays.map(p => {
                  const row = $("<tr>");
                  p.forEach(v => row.append($("<td>").html(v)));
                  return row;
                })
  
                $("#ingredient-table").append(columns);
  
                  const closeModalBtn = document.querySelector(".close");
                  closeModalBtn.addEventListener("click", function() {
                    modalContent.innerHTML = "";
                    document.getElementById("myModal").style.display = "none";
                  })
              
              })
  
            }
  
            drinkModal();
          })
      }
  })
}

allRecipes();