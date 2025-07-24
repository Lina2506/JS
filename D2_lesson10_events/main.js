// #sH8c4er
// – Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
// document.getElementById('btn').addEventListener('click', function(){
//     document.getElementById('text').remove();
// })
// #j693ca8
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18,
// та повідомити про це користувача
// document.getElementById('btnConfirm').addEventListener('click', function(){
//     let ageInput = document.getElementById('ageInput');
//     let message = document.getElementById('message');
//     let age=parseInt(ageInput.value); //- перетворення рядка в число
//
//     if (isNaN(age)){
//         message.innerText='введіть число!';
//         ageInput.value='';
//         return;
//     }
//
//     localStorage.setItem('age', age);
//
//     if(age>=18){
//         message.innerText='ok'
//     }else{
//         message.innerText='!!!'
//     }
// ageInput.value='';
// })
// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
// let someForm = document.forms.someForm;
// let target = document.getElementById('target');
// someForm.onsubmit=function (ev){
//     ev.preventDefault();
//     let nameValue = someForm.username.value;
//     let surnameValue = someForm.usersurname.value;
//     let ageValue = +someForm.userage.value;
//     let obj={
//         name:nameValue,
//         surname:surnameValue,
//         age:ageValue
//     };
//     console.log(obj)
//     target.innerText = `${obj.name} ${obj.surname} ${obj.age} років`;
// }

// #2VaLt4vDczH
// є сторінка, на якій є блок, в кому знаходиться цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// let number = +localStorage.getItem('number');
// number+=1;
// localStorage.setItem('number', number);
//
// document.getElementById('target').innerHTML = number;

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM

// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
// sessionsList.push(new Date());
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));



// #Jg0gPO00
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

// let input = document.getElementById('xxx');
// let resultDiv = document.getElementById('result');
//
// input.oninput=function (){
//     resultDiv.innerText=+this.value*2.2;
// }



// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addToLocalStorage(arrayName,objToAdd{
//     const lsItem = localStorage.getItem(arrayName);
//     if (!lsItem){
//         throw new Error('!!!');
//     }
//     const array = JSON.parse(lsItem);
//     if(typeof objToAdd === 'object'){
//         array.push(objToAdd);
//     }
//     localStorage.setItem(arrayName, JSON.stringify(array));
// }

//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків,
// другий – кількість ячеєк, третій – вміст ячеєк.
//     При натисканні кнопки вся ця інформація зчитується і формується табличка
//     з відповідним вмістом.
// const table = document.getElementById('table');
//
// let tableGeneratorForm = document.getElementById('tableGeneratorForm');
//
// tableGeneratorForm.onsubmit=function (e){
//     table.innerText='';
//     e.preventDefault();
//     const linesValue = +tableGeneratorForm.lines.value;
//     const columnsValue = +tableGeneratorForm.columns.value;
//     const dataValue = tableGeneratorForm.data.value;
//
//     for (let i = 0; i < linesValue; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < columnsValue; j++) {
//             const td = document.createElement('td');
//             td.innerText=dataValue;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
// }


//     #bq1zkx7WP
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з
// довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж
// 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд,
//     нічого не відбувається
// const priceBlock = document.getElementById('priceBlock');
//
// // Отримуємо попередній час з localStorage (якщо був)
// let lastReloadTime = localStorage.getItem('lastReloadTime');
// let savedPrice = localStorage.getItem('price');
//
// // Якщо не було даних у сховищі, встановлюємо стартові значення
// if(!lastReloadTime||!savedPrice){
//     localStorage.setItem('lastReloadTime',Date.now());
//     localStorage.setItem('price','100');
//     priceBlock.innerText='100грн'
// }else{
//     const currentTime = Date.now();
//     const secondPassed = (currentTime-lastReloadTime)/ 1000;
//
//     if(secondPassed>=10){
//         const newPrice=parseInt(savedPrice)+10;
//         localStorage.setItem('price',newPrice);
//         localStorage.setItem('lastReloadTime', currentTime)
//         priceBlock.innerText=newPrice+'грн';
//     }else{
//         priceBlock.innerText=savedPrice;
//     }
// }



// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

// Створюємо масив з 100 об'єктів
const data=Array.from({length: 100}, (_,index) => ({
    id:index+1,
    name:`Item ${index+1}`
}))

// Отримуємо DOM елементи
const container = document.getElementById('container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentPage=1;
const itemsPerPage = 10;

function renderPage(page){
    container.innerHTML = '';
    const start=(page-1)*itemsPerPage;
    const end=start + itemsPerPage;
    const pageItems=data.slice(start, end);

    pageItems.forEach(item=>{
        const div = document.createElement('div');
        div.innerText=`${item.id}`;
        container.appendChild(div);
    })

    // Вимикаємо кнопки, якщо на початку або в кінці
    prevBtn.disabled=currentPage===1;
    nextBtn.disabled=end>=data.length;
}

// Обробники кнопок
prevBtn.onclick=()=>{
    if (currentPage>1){
        currentPage--;
        renderPage(currentPage);
    }
};

nextBtn.onclick=()=>{
    if (currentPage*itemsPerPage<data.length){
        currentPage++;
        renderPage(currentPage);
    }
};

renderPage(currentPage);