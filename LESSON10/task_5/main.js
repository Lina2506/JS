// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM


// const parse = JSON.parse(localStorage.setItem('sessionsList'));

// const sessionList = []; //створюємо масив (можна сказати, що він хибний, тому додаємо перевірку// )
// let sessionsList= [];
// if (localStorage.getItem('sessionList')){ // якщо було щось записано, то отримаємо цю інфц, додаємо інфомацію і після цього пушимо
//     sessionList = JSON.parse(localStorage.getItem('sessionsList'));
// }else{
//     sessionList = [];
// }
// sessionList.push(new Date()); //пушимо поточний стан і ДАТУ
// localStorage.setItem('sessionsList', JSON.stringify(sessionList)); //і вже в існуючий сегмент, ключ - перезаписуємо

JSON.parse(localStorage.getItem('sessionsList')) || [];
sessionsList.push(new Date());
localStorage.setItem('sessionslist', JSON.stringify(sessionsList));
// const sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
// // iter+DOM
// for (const sessionsListElement of sessionsList){
//     const div = document.createElement('div');
//     div.innerText = sessionsListElement.toString();
//     document.body.appendChild(div);
// }