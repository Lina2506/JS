// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const button = document.getElementById('btn');
button.onclick = function () {
    document.getElementById('text').remove();
};