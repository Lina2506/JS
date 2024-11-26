// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

const form = document.forms [0];
form.onsubmit=function (ev){
    ev.preventDefault();
}
let buttonElement = document.getElementsByTagName("button") [0];
let input = form.age;
buttonElement.onclick=function (){
    localStorage.setItem('age', input.value);
    let userAge = +localStorage.getItem('age');
    if (userAge>=18){
        console.log('OK');
    }else{
        console.log('!!!');
    }
}
