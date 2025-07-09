// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
//
let rectangle=(a,b)=>a*b;
console.log(rectangle(3,3));
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

const pi=3.14;
let circle=(r)=>pi*r*r;
console.log(circle(3));

// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
//
let cylinder=(r,h)=>2*pi*h*r;
console.log(cylinder(3,3));
//
// – створити функцію, яка приймає масив та виводить кожен його елемент
//
let foobarArray=(array) => {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}
//
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент
//
let foobarText=(text) => {
    document.write(`<p>${text}</p>`);
}
//
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
let foobarUl=(text)=>
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
//
// – створити функцію, яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)
//
let foobar2Ul=(text, counter)=> {
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);

    }
    document.write(`</ul>`);
}
    foobar2Ul("djnefjef", 3)
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
//
let foobar2Array=(array) => {
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}
foobar2Array(["djnkjn",1212,false])
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об’єкту окремий блок.
//
let arrayIsArray=(array) => {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`)
    }
}
arrayIsArray([{id:1,name:"vasya", age:3},
    {id:2,name:"petya", age:3},
    {id:3,name:"kokos", age:3}]);
//
// – створити функцію, яка повертає найменше число з масиву
//
// let numberArray=(array) => {
//     let min=array[0];
//     for (let i = 0; i < array.length; i++) {
//         const number = array[i];
//         if (number<min){
//             min = number;
//         }
//     }
//     return min;
// }
// console.log(numberArray([4, 1, 5]));

let numberArray=(array) => Math.min(...array);
console.log(numberArray([4, 1, 5]));
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад sum([1,2,10]) //->13
//
let sumArray=(array)=>{
    let box=0
    for (const item of array) {
        box=box+item;
    }
    return box;
}

//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
let swap=(arr,index1,index2) => {
    let tem=arr[index1]; //-зберігаємо значення першого елемента
    arr[index1]=arr[index2]; // -перезаписуємо значення першого елемента
    arr[index2]=tem;//-записуємо збережене значення у другий індекс
    return arr;//повертаємо змінений масив
}

//
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250
//
let exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
    for (let i = 0; i < currencyValues.length; i++) {
        const currencyObj = currencyValues[i];//доступаємось до кожного обʼєкта валюти
        if (currencyObj.currency === exchangeCurrency) {//порівнюємо валюту, що шукаємо
            return sumUAH/currencyObj.value;//ділимо гривні на курс, отримуємо суму в валюті
        }
    }
}