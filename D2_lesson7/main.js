// #XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)
//
function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arrUser=[
    new User(1,'vasya','wdwed','wdwed',2312312),
    new User(2,'dwed','dwed',2312312),
    new User(3,'dwed','dwed',2312312),
    new User(4,'dwed','dwed',2312312),
    new User(5,'dwed','dwed',2312312),
    new User(6,'dwed','dwed',2312312),
    new User(7,'dwed','dwed',2312312),
    new User(8,'dwed','dwed',2312312),
    new User(9,'dwed','dwed',2312312),
    new User(10,'dwed','dwed',2312312)
]
console.log(arrUser);
//
// #2ikXsE2WiKZ
// – Взяти масив з  User[] з попереднього завдання,
// та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
//
let usersFilter = arrUser.filter((user) => user.id%2===0);
console.log(usersFilter);

//
// #pOeHKct
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
let usersSort = arrUser.sort((user1, user2) => (user1.id - (user2.id)));
console.log(usersSort);

//
// #nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client
function Client(id, name, surname , email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [new Client(1,'dcwc','wdwed','wdwed',2312312,[{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323}]),
    new Client(2,'Paul','paul',2312312,434234,[{title:'sdcbjsdc',price:2323}]),
    new Client(3,'Paul','paul',2312312,23423434,[{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323}]),
    new Client(4,'Paul','paul',2312312,234324234,[{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323}]),
    new Client(5,'Paul','paul',2312312,234234234,[{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323}]),
    new Client(6,'Paul','paul',2312312,23423423,[{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323}]),
    new Client(7,'Paul','paul',2312312,234234243,[{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323},{title:'sdcbjsdc',price:2323}])]
// #8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів
// в полі order по зростанню. (sort)
console.log(clients.sort((client1, client2) => client1.order.length - client2.order.length));

// #vV9a6584I5
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель,
// виробник, рік випуску,максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
// function Car(model,vyrobnyk,year,max,volume){
//     this.model=model;
//     this.vyrobnyk=vyrobnyk;
//     this.year=year;
//     this.max=max;
//     this.volume=volume;
//     this.drive=function(){
//         console.log(`їдемо зі швидкістю ${this.max} на годину`);
//     };
//     this.info=function(){
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//     this.increaseMaxSpeed=function (speedToAdd){
//         this.max=this.max+speedToAdd;
//     };
//     this.changeYear=function(newValue){
//         if (newValue>1815) this.year=newValue;
//     }
//     this.addDriver=function(driverObject){
//         if (driverObject) this.driver=driverObject;
//     }
// }
// let car=new Car('jaskxsj', 'jkjjll', 1995, 250, 2);
// car.drive();
// car.info();
// car.increaseMaxSpeed(300);
// car.changeYear(1955);
// car.addDriver({});
// console.log(car);
// #5kla3yMpgp
// – (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//— drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car
class Car {
    constructor(model, vyrobnyk, year, max, volume) {
        this.model = model;
        this.vyrobnyk = vyrobnyk;
        this.year = year;
        this.max = max;
        this.volume = volume;
    }
        drive(){
        console.log(`їдемо зі швидкістю ${this.max} на годину`);
    };
        info(){
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
        increaseMaxSpeed(speedToAdd){
        this.max=this.max+speedToAdd;
    };
        changeYear(newValue){
        if (newValue>1815) this.year=newValue;
    }
   addDriver(driverObject){
        if (driverObject) this.driver=driverObject;
    }
}
let car=new Car('jaskxsj', 'jkjjll', 1995, 250, 2);
car.drive();
car.info();
car.increaseMaxSpeed(300);
car.changeYear(1955);
car.addDriver({});
console.log(car);

// #zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги.
// Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
//
class cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
    let princeses=[
        new cinderella('olia',20,37),
        new cinderella('polia',23,36),
        new cinderella('maya',25,38),
        new cinderella('mia',21,35),
        new cinderella('lia',22,39),
        new cinderella('asha',24,36),
        new cinderella('tasha',19,37),
        new cinderella('anya',26,38),
        new cinderella('manya',18,39),
        new cinderella('valia',27,40)]
class prince {
    constructor(name, age, shoeFind) {
        this.name = name;
        this.age = age;
        this.shoeFind = shoeFind;
    }
}
    let newKing=new prince('philip',25,35);

for (const cinderella of princeses) {
    if (cinderella.footSize===newKing.shoeFind){
        console.log(cinderella.name);
    }

}
let find = princeses.find(princeses=>princeses.footSize===newKing.shoeFind);
console.log(find);

// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
