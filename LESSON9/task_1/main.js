// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const htmlDivElement = document.createElement('div');
htmlDivElement.classList.add('wrap');
htmlDivElement.classList.add('collapse');
htmlDivElement.classList.add('alpha');
htmlDivElement.classList.add('beta');
document.body.appendChild(htmlDivElement);
const cloneNode = htmlDivElement.cloneNode(true);
document.body.appendChild(cloneNode);