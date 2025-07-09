//         JS. Додаткові ДЗ по масивах та циклах
// #WpkK0ZH1
//         –створити масив з: 
//         – з 5 числових значень
// let numbers=[3,5,6,8,5];
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number)
// }
//         – з 5 стічкових значень
// let strings=['frv','en','fr','fr','en'];
// for (let i = 0; i < strings.length; i++) {
//     const string = strings[i];
//     console.log(string)
// }
//         – з 5 значень стрічкового, числового та булевого типу
//         – та вивести його в консоль
// let values3=[
//     3,4,'kjdfv',false,true
// ];
// for (let i = 0; i < values3.length; i++) {
//     const values3Element = values3[i];
//     console.log(values3Element)
// }

//  #4aDbSgh
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу.
// Вивести в консоль
// let empty=[]
// empty[0]=1;
// empty[1]='alright';
// empty[2]=false;
// for (let i = 0; i < empty.length; i++) {
//     console.log(empty[i])
// }
//  #qLQLJSeN7i
//  – є масив
//     let number=[2,17,13,6,22,31,45,66,100,-18]
//1. перебрати його циклом while
// let i=0
// while(i<number.length){
//     console.log(number[i])
//     i++;
// }
// let i=number.length;
// while (i>=0){
//     let numberEL=number[i];
//     console.log(numberEL);
//     i--;
//
// }
//2. перебрати його циклом for
// for (let j = 0; j < number.length; j++) {
//     const numberElement = number[j];
//     console.log(numberElement);
// }
// for (let j = number.length; j >=0; j--) {
//     const numberElement = number[j];
//     console.log(numberElement);
//
// }
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let n=1
// while(n<number.length){
//     console.log(`index ${n}` +` `+ number[n])
//     n+=2;
// }
// let n=number.length-1;
// if (n%2===0) n--;
// while (n>=0){
//     console.log(number[n])
//     n-=2;
// }
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let p = 1; p < number.length; p+=2) {
//     const numberElement = number[p];
//     console.log(numberElement);
//
// }
// for (let p = number.length-1; p>=0; p-=2) {
//     const numberElement = number[p];
//     console.log(numberElement);
//
// }
//5. перебрати циклом while та вивести  числа тільки парні  значення
// let o=2
// while (o<number.length){
//     console.log(`index ${o}` +` `+ number[o])
//     o+=2;
// }
// let o=number.length-1;
// if (o%1===0)n--;
// while(o>=0){
//     console.log(number[o]);
//     n-=2;
// }
//6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let u = 2; u < number.length; u+=2) {
//     const numberElement = number[u];
//     console.log(numberElement);
//
// }
// for (let u = number.length-1; u >=1; u-=2) {
//     const oElement = number[u];
//     console.log(oElement);
// }
//7. замінити кожне число, кратне 3, на слово “okten”
// for (let z = 0; z < number.length; z++) {
//     if (number[z] % 3 ===0){
//         number[z]='okten';
//     }
//     let numberE= number[z];
// console.log(numberE);
//
// }
// for (let z = number.length-1; z >=0; z--) {
//     if (number[z]%3===0){
//         number[z]='okten';
//     }
//     const numberElement = number[z];
// console.log(numberElement);
// }
//8. вивести масив у зворотньому порядку.
// for (let r = number.length-1; r >= 0; r--) {
//     const numberEl = number[r];
//     console.log(numberEl);
// }
//9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)


//   #yHAwJOyiC
//   – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let m=[1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < m.length; i++) {
//     const mElement = m[i];
//     console.log(mElement)
// }
//   #GamKju89ob
//   – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
// let string=['dvdfv','jkj','dvdfv','dvdfv','dvdfv','dvdfv','dvdfv','dvdfv','dvdfv','dvdfv']
// for (let i = 0; i < string.length; i++) {
//     const stringElement = string[i];
//     console.log(stringElement)
// }
//   #Bm76xmg
//   – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mix=[1,2,3,4,"5",false,7,8,9,'ten']
// for (let i = 0; i < mix.length; i++) {
//     const mixEl = mix[i];
//     console.log(mixEl)
// }
//   #u3vmD0YJXh
//   – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mix=[1,2,3,4,"5",false,7,8,9,'ten']
// for (let i = 0; i < mix.length; i++) {
//    if (typeof mix[i] === "boolean") {
//        console.log(mix[i])
//    }
// }
//     #9stMq2ou
//   – Створити масив з 10 елементів числового, стрічкового і булевого типу.
//   За допомогою if та typeof вивести тільки числові елементи
// let mix=[1,2,3,4,"5",false,7,8,9,'ten']
// for (let i = 0; i < mix.length; i++) {
//     if (typeof mix[i] === 'number') {
//         console.log(mix[i])
//     }
// }
//   #mK4pmM4
// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
// let mix=[1,2,3,4,"5",false,7,8,9,'ten']
// for (let i = 0; i < mix.length; i++) {
//     if (typeof mix[i] === 'string') {
//         console.log(mix[i])
//     }
// }
//   #0pm3EyTKy9
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через
// звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let empty=[];
// empty[0]=1;
// empty[1]=2;
// empty[2]=3;
// empty[3]=4;
// empty[4]='5';
// empty[5]=false;
// empty[6]=7;
// empty[7]=8;
// empty[8]=9;
// empty[9]='ten';
// for (let i = 0; i < empty.length; i++) {
//     const emptyElement = empty[i];
//     console.log(emptyElement);
//
// }
//   #mDMWMW5a
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через
// console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
//
// }
//   #4sXhaa5YMM
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через
// console.log та document.write
// for (let i = 0; i < 100; i++) {
//    console.log(i);
//     document.write(i+'<br>');
//
// }
//         #s24slNyz7
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через
// console.log та document.write
// for (let i = 0; i <100; i+=2) {
//    console.log(i);
//    document.write(i+'<br>');
// }
//         #zananT5FR1
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки.
// через console.log + document.write
// for (let i = 0; i <100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//         document.write(i+'<br>');
//     }
// }
//         #Tfrwls7FM
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки.
// через console.log + document.write
// for (let i = 1; i < 100; i+=2) {
//    console.log(i)
//     document.write(i+'<br>');
//
// }
//         #reLkOkTB29Q
//         створити масив книжок
//         (назва, кількість сторінок, автори , жанри).
// let books=[
//    {
//     title: "Dawn in the mountains",
//         pageCount: 326,
//         genres: ['horror','comedy'],
//         author: {
//         name: 'Luiza Washington',
//             age: 34
//     }
// }, {
//     title: "Rainbow",
//     pageCount: 12,
//     genres: 'tale',
//     author: {
//         name: 'David Jonson',
//         age: 69
//     }
// }, {
//     title: "Mystery",
//     pageCount: 980,
//     genres: 'drama',
//     author: {
//         name: 'Adam Miller',
//         age: 42
//     }
// }];
// //     – знайти найбільшу книжку.
// // let biggestBook=books[0]; //— Ми припускаємо,
// // що перша книжка з масиву — найбільша.
// // // Зберігаємо її в змінну biggestBook.
// // for (let book of books) {
// //     //— Починаємо перебирати всі книжки в масиві books.
// //     if (book.pageCount>biggestBook.pageCount) {
// //         //— Порівнюємо кількість сторінок поточної книжки (book.pageCount) з тою,
// //         // яку зараз вважаємо найбільшою (biggestBook.pageCount).
// //         biggestBook=book;
// //         //Якщо поточна книжка має більше сторінок,
// //         // ніж попередня "найбільша", ми оновлюємо biggestBook,
// //         // тобто призначаємо цю нову книжку як найбільшу.
// //     }
// // }
// // console.log(biggestBook);
// // – знайти книжку/ки з найбільшою кількістю жанрів
// // let biggestGenres=books[0];
// // for (let book of books) {
// //     if (book.genres.length>biggestGenres.genres.length) {
// //         biggestGenres.genres = book;
// //     }
// // }
// // console.log(biggestGenres);
// //
// // – знайти книжку/ки з найдовшою назвою
// let biggestName=books[0];
// for (let book of books) {
//     if (book.title.length>biggestName.title.length) {
//         biggestName=book;
//     }
// }
// console.log(biggestName);
// – знайти книжку/ки, які писали 2 автори
//
// – знайти книжку/ки, які писав 1 автор
//
//
//1. Створити пустий масив та :
// let empty=[];
//    a. заповнити його 50 парними числами за допомоги циклу.
// let number=0;
// while(empty.length<50){
//     if (number%2===0){
//         empty.push(number);
//     }
//     number++;
// }
//    b. заповнити його 50 непарними числами за допомоги циклу.
// let num=1;
// while (empty.length<50){
//     empty.push(num);
// num+=2;
// }

//    c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
// function getRandomInt(max){
//     return Math.floor(Math.random()*max);
// }
// let i=0;
// while(i<20){
//     empty.push(getRandomInt(100));
//    i++;
// }
// console.log(empty);
//d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
// function getRandomInt(min,max){
//     return Math.floor(Math.random() * (max - min+1)) + min;
// }
// let i=0;
// while(i < 20){
//     empty.push(getRandomInt(8,732));
//     i++;
// }
// console.log(empty);
//2. Вивести за допомогою console.log кожен третій елемент
// for (let third=2; third <empty.length; third += 3){
//     console.log(empty[third]);
// }
//3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
// for (let t=2; t<empty.length; t+=3){
// const thirdPair=empty[t];
// if(thirdPair%2===0){
//     console.log(thirdPair);
// }
// }

//4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
//let newArray=[];
// for (let t=2; t<empty.length; t+=3){
// const thirdPair=empty[t];
// if(thirdPair%2===0){
//     console.log(thirdPair);
//     newArray.push(thirdPair);
// }
// }
// console.log(newArray);
//5. Вивести кожен елемент масиву, сусід справа якого є парним
// let a=[1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < a.length-1; i++) {
//     if (a[i+1]%2===0){
//         console.log(a[i]);
//     }
// }
//EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let a=[100,250,50,168,120,345,188];
// let sum=0;
// for (const number of a) {
//     sum += number;
// }
// let average=sum/a.length;
// console.log(average);
// 7. Створити масив з рандомними значеннями,
// помножити всі його елементи на 5 та перемістити їх в
// інший масив.
// function getRandomInt(min,max) {
//     return Math.floor(Math.random() * (max - min+1)) + min;
//
// }
// let first=[];
// for (let i = 0; i < 10; i++) {
//     first.push(getRandomInt(1,10));
// }
// let second=[];
// for (let q = 0; q < first.length; q++) {
//     second.push(first[q]*5);
//
// }
// console.log(first);
// console.log(second);
// 8. Створити масив з будь-якими значеннями (стрінги, числа,
// і тд…). пройтись по ньому, і, якщо елемент є числом,
// додати його в інший масив.
//
// let mix=[1,2,3,4,"5",false,7,8,9,'ten'];
// let numbersOnly=[];
// for (let i = 0; i < mix.length; i++) {
//     if (typeof mix[i] === "number") {
// numbersOnly.push(mix[i]);
//     }
//
// }
// console.log(numbersOnly);
// – Дано 2 масиви з рівною кількістю об’єктів.
//
//             Масиви:
//
// let usersWithId = [
//     { id: 1, name: 'vasya', age: 31, status: false },
//     { id: 2, name: 'petya', age: 30, status: true },
//     { id: 3, name: 'kolya', age: 29, status: true },
//     { id: 4, name: 'olya', age: 28, status: false }
// ];
// let citiesWithId = [
//     { user_id: 3, country: 'USA', city: 'Portland' },
//     { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
//     { user_id: 2, country: 'Poland', city: 'Krakow' },
//     { user_id: 4, country: 'USA', city: 'Miami' }
// ];
//
// // З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
//
// // Записати цей об’єкт в новий масив
// //
// // Example:
// //
//     let usersWithCities = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     const user = usersWithId[i];
//
//     for (let j = 0; j < citiesWithId.length; j++) {
//         const city = citiesWithId[j];
//
//         if (user.id === city.user_id) {
//             let userWithCity = {
//                 id: user.id,
//                 name: user.name,
//                 age: user.age,
//                 status: user.status,
//                 address: {
//                     user_id: city.user_id,
//                     country: city.country,
//                     city: city.city
//                 }
//             };
//             usersWithCities.push(userWithCity);
//             break;
//         }
//     }
// }
//     console.log(usersWithCities);
//
//         {
//
//             id: 1, // <===
//
//             name: ‘vasya’,
//
// age: 31,
//
//     status: false,
//
//     address: {
//
//     user_id: 1, // <===
//
//         country: ‘Ukraine’,
//
//     city: ‘Ternopil’
//
// }
//
// },
//
// // TO BE CONTINUED …..
//
// ]
//
//
//
//
//
//
//
//
//
// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи,
// значення яких є парними.
//
// 
//
// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// 
//
// 
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.

