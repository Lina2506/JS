// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
function rectangle(a, b) {
    return a * b;
}
rectangle(3,3);
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
let pi=3.14;
function circle(r){
    return pi*r*r;
}
circle(3);
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
function cylinder(r, h){
    return 2*Math.PI*r*h;
}
cylinder(3,2);
//
// – створити функцію, яка приймає масив та виводить кожен його елемент
function foobar(array){
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}
//
// – створити функцію, яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент
function foobar2(text){
    document.write(`<p>${text}</p>`);
}
foobar2("dfnenen");
//
// – створити функцію, яка створює ul з трьома елементами li та
// виводить його через document.write.
// Текст li задати через аргумент всім однаковий
function foobar3(text){
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`);
}
foobar3("dfnenen");
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// та виводить його через document.write
function foobar4(text, counter) {
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
foobar4("dvevfv",10);
//
// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
//
function foobar5(array) {
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
foobar5(["dvevfv",23234234,false]);
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об’єкту окремий блок.
function foobarForUsers(usersArray) {
    for (const user of usersArray) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
foobarForUsers([{id:1,name:"dnckjnc",age:22},
    {id:2,name:"dnckjnc",age:22},
    {id:3,name:"dnckjnc",age:22}]);
//
// – створити функцію яка повертає найменьше число з масиву
//
function returnMin(numberArray) {
    let min=numberArray[0];
    for (let i = 0; i < numberArray.length; i++) {
        const number = numberArray[i];
        if (number<min){
            min = number;
        }
    }
    return min;
}

console.log(returnMin([2, 3, 4, 5]));
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr){
    let box=0;
    for (const item of arr) {
        box=box+item;
    }
    return box;
}

console.log(sum([1, 2, 10]));
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
function swap(arr,index1,index2){
    let temp=arr[index1];
    arr [index1]=arr[index2];
    arr [index2]=temp;
    return arr;
}

console.log(swap([11, 22, 33, 44], 1, 3));
//
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (let i = 0; i < currencyValues.length; i++) {
        let currencyObj = currencyValues[i];
        if (currencyObj.currency === exchangeCurrency) {
            return sumUAH/currencyObj.value;
        }
    }
}

console.log(exchange(10000, [
    {currency: 'USD', value: 25},
    {currency: 'EUR', value: 42}],
    'USD'));