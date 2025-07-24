// #HmvAfRQM
// – взяти https://dummyjson.com/docs/carts та вивести
// інформацію про всі корзини. Відобразити всі поля
// кожної корзини.
//Шукає на HTML-сторінці елемент з id="carts" і зберігає його в змінну
const cartsDiv = document.getElementById('carts');
//Викликає HTTP GET запит до вказаного URL (API).
fetch('https://dummyjson.com/carts')
    //Перетворює відповідь від сервера (Response) у JSON-об’єкт (тобто звичайний JS-об'єкт).
    .then(res => res.json())
    //Ми беремо лише масив carts через деструктуризацію:
    .then(cartsObject => {
        const {carts} = cartsObject;
        //Проходимо по кожному об’єкту корзини (всередині масиву carts).
        for (const cart of carts) {
            // Створюємо контейнер для кожної корзини і додаємо CSS-клас.
            const div = document.createElement('div');
            div.classList.add('cart-container');

            //Створюємо блок, у якому виводяться загальні дані по корзині:
            // – сума,
            // – знижки,
            // – кількість товарів,
            // – id користувача тощо.
            const divWithInfo = document.createElement('div');
            divWithInfo.innerText = `
                "total":${cart.total},
                "discountedTotal":${cart.discountedTotal},
                "userId":${cart.userId},
                "totalProducts":${cart.totalProducts},
                "totalQuantity":${cart.totalQuantity}
                `;
//Створюємо нумерований список товарів.
            const ol = document.createElement('ol');
            //Проходимося по масиву productів, які лежать у кожній корзині.
            for (const product of cart.products) {
//Створюємо список для кожного продукту та вставляємо основну інформацію:
// – id,
// – назву,
// – ціну,
// – кількість,
// – thumbnail тощо.
    const li = document.createElement('li');
    const info = document.createElement('p');
    info.innerText = `
                "id": ${product.id},
                "title": ${product.title},
                "price": ${product.price},
                "quantity": ${product.quantity},
                "total": ${product.total},
"               “discountPercentage": ${product.discountPercentage},
                "discountedTotal": ${product.discountedTotal}
                `

                const img = document.createElement('img');
                img.src=product.thumbnail;

                li.append(img, info);
                ol.appendChild(li);
            }
            div.append(divWithInfo,ol);
            cartsDiv.appendChild(div);
        }
    })
//     #whXxOBlYS0H
// – взяти https://dummyjson.com/docs/recipes та вивести
// інформацію про всі рецепти. Інгредієнти повинні
// бути списком під час відображення.
// 1. Знайти контейнер
const recipesDiv = document.getElementById('recipes');
// 2. Отримати дані з API
fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(data => {
    const { recipes } = data;
// 3. Перебрати кожен рецепт
    for (const recipe of recipes) {
        // 3.1 Створити контейнер для рецепта
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        // 3.2 Додати заголовок
        const title = document.createElement('h3');
        title.innerText = recipe.name;
        const info = document.createElement('p');
        info.textContent = `Cuisine: ${recipe.cuisine}, Time: ${recipe.prepTimeMinutes} mins, Rating: ${recipe.rating}`;
        // 3.4 Додати список інгредієнтів
        const ul = document.createElement('ul');
        for (const ingredient of recipe.ingredients) {
            const li = document.createElement('li');
            li.innerText=ingredient;
            ul.appendChild(li);
        }
        const img = document.createElement('img');
        img.srs=recipe.image;
        recipeDiv.append(title,ul, info, img);
        recipesDiv.appendChild(recipeDiv);
    }
})
.catch(err => {
    console.error('Fetch error:', err);
    recipesDiv.innerText = 'Failed to load recipes. Please try again later.';
});