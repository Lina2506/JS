// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк,
// третій вміст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const table = document.getElementById('table');
const tableGeneratorForm = document.forms ['tableGeneratorForm'];

tableGeneratorForm.onsubmit=function (ev){
    ev.preventDefault();
    const lineValue = + tableGeneratorForm.line.value;
    const cellValue = + tableGeneratorForm.cell.value;
    const contentValue = tableGeneratorForm.content.value;
    console.log(lineValue, cellValue, contentValue);
    for (let i=0;i<lineValue;i++) {
        const tr = document.createElement("tr");
        for (let j=0; j<cellValue; j++) {
            const td= document.createElement('td');
            td.innerText = contentValue;
            tr.appendChild(td);

        }
        table.appendChild(tr);
    }

}