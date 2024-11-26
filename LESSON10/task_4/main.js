// #2VaLt4vDczH
// є сторінка, на якій є блок, в якому знаходиться цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1


let item = +localStorage.getItem('number');
item += 1;
localStorage.setItem('number', item);

document.getElementById('target').innerText = item;
