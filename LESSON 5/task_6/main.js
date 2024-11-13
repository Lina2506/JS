// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let foobar = (text) =>
    document.write(`<ul>
                 <li>${text}</li>
                 <li>${text}</li>     
                 <li>${text}</li>
                  </ul>`);
foobar("hello it's me")
