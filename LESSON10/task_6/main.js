// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const input = document.getElementById('calc');
const resultDiv = document.getElementById('result');
input.oninput=function (){

    const kilos = + this.value;
    let result = kilos * 2.2;
    resultDiv.innerText = result;
    // resultDiv.innerText = + this.value * 2.2;
}
