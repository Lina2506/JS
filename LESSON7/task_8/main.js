// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
const cinderellas= [
    new Cinderella('jdckj', 20, 35),
    new Cinderella('jdcsc', 21, 34),
    new Cinderella('iuhoj', 22, 33),
    new Cinderella('askxökx', 20, 39),
    new Cinderella('uihj', 24, 32),
    new Cinderella('hjklk', 22, 40),
    new Cinderella('iudhcojs', 21, 32),
    new Cinderella('sdck', 20, 35),
    new Cinderella('spokx', 23, 32),
    new Cinderella('ksjnl', 23, 37),
]
const prince = new Prince('dckjn', 30, 33);

for (const cinderella of cinderellas) {
    if (cinderella.footSize===prince.shoe){
        princeChoice = cinderella;
    }
}
console.log(princeChoice);