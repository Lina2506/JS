// #dYQNrBV
//
// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’,
// 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//
//     Вивести кожну змінну за допомогою: console.log
//

let a="hello";
console.log(a);
let n="owu";
console.log(n);
let c="com";
console.log(c);
let d="ua";
console.log(d);
let e=1;
console.log(e);
let f=10;
console.log(f);
let g=-999;
console.log(g)
let h = 3.14;
console.log(h);
let l = 2.7;
console.log(l);
let j = 16;
console.log(j);
let k = true;
console.log(k);
let m = false;
console.log(m);

// #6Qb97gsv
//
// – Створити 3 змінних firstName, middleName, lastName,
// наповнити їх своїм ПІБ. З’єднати їх в одну змінну person
// (Не об’єкт, просто за допомогою конкатенації)
let firstName="Polina";
let middleName="Kostyantynivna";
let lastName="Morhun";
let person=lastName+' '+firstName+' '+middleName;
console.log(person);
let person1=`${firstName} ${middleName} ${lastName}`;
console.log(person1);
//
//
// #4N0y5tufA
//
// – За допомогою оператора typeof визначити типи наступних змінних
// та вивести їх в консоль.
//
let y = 100;
console.log(typeof y);
let x ='100';
console.log(typeof x);
let v = true;
console.log(typeof v);
//
// #ruUtWDUI
//
// Додаткове для тих, хто цікавився prompt`oм
//
// – За допомогою 3-х різних prompt() отримати 3 слова
// які являються вашими Імʼям, По-батькові та роками.
// Та вивести в консоль

let firstname=prompt('First Name');
let middlename=prompt('Middle Name');
let age=prompt('Age');

console.log(firstname,middlename,age);

// 🧩 Завдання 1
// Напиши цикл, який виводить числа від 1 до 10.
//
// 🧩 Завдання 2
// Порахуй суму чисел від 1 до 100.
//
// 🧩 Завдання 3
// Створи змінну name, присвой своє ім’я і виведи в консоль:
//     "Привіт, Поліна!"