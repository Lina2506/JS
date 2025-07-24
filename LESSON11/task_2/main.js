// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію
// про всі рецепти. Інгредієнти повинні бути список під час відображення.

// const url = new URL('https://dummyjson.com/recipes');
// url.searchParams.set('limit', '50');
//
// const target = document.getElementsByClassName('target')[0];
// fetch(url)
//     .then(value => value.json())
//     .then(recipesObject => {
//         const {recipes} = recipesObject;
//         for (const recipe of recipes) {
//             console.log(recipe);
//             const recipeDiv = document.createElement('div');
//             for (const recipeKey in recipe) {
//                 if (Array.isArray(recipe[recipeKey])) {
//                     const arrayAndTitleDiv = document.createElement('div');
//                     const h3 = document.createElement('h3');
//                     h3.innerText = `${recipeKey}:`;
//                     const ol = document.createElement('ol');
//                     const array = recipe[recipeKey];
//                     for (const item of array) {
//                         const li = document.createElement('li');
//                         li.innerText = item;
//                         ol.appendChild(li);
//                     }
//                     arrayAndTitleDiv.append(h3, ol);
//                     recipeDiv.appendChild(arrayAndTitleDiv);
//                 } else {
//                     if (recipeKey!== 'image'){
//                         const keyDiv = document.createElement('div');
//                         keyDiv.innerText = `${recipeKey}: ${recipe[recipeKey]}`;
//                         recipeDiv.appendChild(keyDiv);
//                     }
//                 }
//             }
//             const img = document.createElement('img');
//             img.src = recipe.image;
//             recipeDiv.appendChild(img);
//             target.appendChild(recipeDiv);
//         }
//     });

const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '50');

const target = document.querySelector('.target');
if (!target) {
    console.error('Container with class .target not found!');
}

fetch(url)
    .then(res => res.json())
    .then(({ recipes }) => {
        for (const recipe of recipes) {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            // Виводимо ключові поля першими
            const title = document.createElement('h2');
            title.innerText = recipe.name;
            recipeDiv.appendChild(title);

            const cuisine = document.createElement('p');
            cuisine.innerText = `Cuisine: ${recipe.cuisine}`;
            recipeDiv.appendChild(cuisine);

            const prepTime = document.createElement('p');
            prepTime.innerText = `Prep time: ${recipe.prepTimeMinutes} mins`;
            recipeDiv.appendChild(prepTime);

            const rating = document.createElement('p');
            rating.innerText = `Rating: ${recipe.rating}`;
            recipeDiv.appendChild(rating);

            // Інгредієнти — окремим списком
            if (Array.isArray(recipe.ingredients)) {
                const ingredientsTitle = document.createElement('h4');
                ingredientsTitle.innerText = 'Ingredients:';
                recipeDiv.appendChild(ingredientsTitle);

                const ul = document.createElement('ul');
                for (const ingredient of recipe.ingredients) {
                    const li = document.createElement('li');
                    li.innerText = ingredient;
                    ul.appendChild(li);
                }
                recipeDiv.appendChild(ul);
            }

            // Додаємо зображення
            if (recipe.image) {
                const img = document.createElement('img');
                img.src = recipe.image;
                img.alt = `Image for ${recipe.name}`;
                recipeDiv.appendChild(img);
            }

            // Виводимо інші поля (які ще не виводились)
            const ignoredFields = ['name', 'cuisine', 'prepTimeMinutes', 'rating', 'ingredients', 'image'];
            for (const key in recipe) {
                if (!ignoredFields.includes(key)) {
                    const value = recipe[key];

                    if (Array.isArray(value)) {
                        const listTitle = document.createElement('h4');
                        listTitle.innerText = `${key}:`;
                        recipeDiv.appendChild(listTitle);

                        const ul = document.createElement('ul');
                        for (const item of value) {
                            const li = document.createElement('li');
                            li.innerText = item;
                            ul.appendChild(li);
                        }
                        recipeDiv.appendChild(ul);
                    } else if (typeof value === 'object' && value !== null) {
                        const objDiv = document.createElement('div');
                        objDiv.innerText = `${key}: ${JSON.stringify(value)}`;
                        recipeDiv.appendChild(objDiv);
                    } else {
                        const field = document.createElement('p');
                        field.innerText = `${key}: ${value}`;
                        recipeDiv.appendChild(field);
                    }
                }
            }

            target.appendChild(recipeDiv);
        }
    })
    .catch(err => {
        console.error('Error fetching recipes:', err);
        target.innerText = 'Something went wrong while loading recipes.';
    });