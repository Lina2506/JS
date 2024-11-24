// #ymAmN2xJ
// Створити форму з трьома полями для name,surname,age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ.
// Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const someForm = document.getElementById('someForm');
const target = document.getElementById('target');

someForm.onsubmit=function (ev){

    ev.preventDefault();
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = someForm.age.value;

    let obj = {nameValue, surnameValue, ageValue};
    target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue + ' ';
};
